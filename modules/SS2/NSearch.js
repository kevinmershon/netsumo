module.exports = class NSearch {
  constructor() {
    this.Type = {
      CUSTOMER:"customer",
      ITEM:"item",
      LOCATION:"location"
    }
    this.Operator = {
      AFTER:                   'after',
      ALLOF:                   'allof',
      ANY:                     'any',
      ANYOF:                   'anyof',
      BEFORE:                  'before',
      BETWEEN:                 'between',
      CONTAINS:                'contains',
      DOESNOTCONTAIN:          'doesnotcontain',
      DOESNOTSTARTWITH:        'doesnotstartwith',
      EQUALTO:                 'equalto',
      GREATERTHAN:             'greaterthan',
      GREATERTHANOREQUALTO:    'greaterthanorequalto',
      HASKEYWORDS:             'haskeywords',
      IS:                      'is',
      ISEMPTY:                 'isempty',
      ISNOT:                   'isnot',
      ISNOTEMPTY:              'isnotempty',
      LESSTHAN:                'lessthan',
      LESSTHANOREQUALTO:       'lessthanorequalto',
      NONEOF:                  'noneof',
      NOTAFTER:                'notafter',
      NOTALLOF:                'notallof',
      NOTBEFORE:               'notbefore',
      NOTBETWEEN:              'notbetween',
      NOTEQUALTO:              'notequalto',
      NOTGREATERTHAN:          'notgreaterthan',
      NOTGREATERTHANOREQUALTO: 'notgreaterthanorequalto',
      NOTLESSTHAN:             'notlessthan',
      NOTLESSTHANOREQUALTO:    'notlessthanorequalto',
      NOTON:                   'noton',
      NOTONORAFTER:            'notonorafter',
      NOTONORBEFORE:           'notonorbefore',
      NOTWITHIN:               'notwithin',
      ON:                      'on',
      ONORAFTER:               'onorafter',
      ONORBEFORE:              'onorbefore',
      STARTSWITH:              'startswith',
      WITHIN:                  'within'
    }
    this.records = [];
  }

  lookupFields(data) {
    var records = this.records.filter(record => (record.id == data.id && record.type == data.type));
    var response = {};
    if(records && records.length > 0) {
      var record = records[0];
      for(let column of data.columns) {
          response[column] = record.getValue(column)
      }
    }

    return response;
  }

  addRecord(record) {
    this.records.push(record)
  }

  newSearch() {
    const _self = this;

    return {
      id: Math.floor(Math.random() * 10000),
      columns: [],
      filters: [],
      run: function() {
        return {
          length: _self.records.length,
          each: function(callback) {
            for (var i=0; i<_self.records.length; i++) {
              callback(_self.records[i]);
            }
          }
        };
      },
    };
  }

  create(opts) {
    const search = this.newSearch();
    if (opts.columns) {
      search.columns = opts.columns;
    }
    if (opts.filters) {
      search.filters = opts.filters;
    }
    return search;
  }

  load(opts) {
    const search = this.newSearch();
    search.id = opts.id;
    return search;
  }

  createFilter(opts) { return {}; }
  createColumn(opts) { return {}; }

}
