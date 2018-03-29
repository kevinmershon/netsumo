const Sublist = require('./Sublist');

module.exports = class Form {
  constructor(options) {
    this.id = options.id;
    this.title = options.title;
    this.sublists = {};

    this._populateSublists(options);
  }

  _populateSublists(options) {
    if(options.sublists) {
      var sublistIds = Object.keys(options.sublists);
      for (var i=0; i<sublistIds.length; i++) {
        const sublistId = sublistIds[i];
        const lines = options.sublists[sublistId];

        options.lines = lines;
        const newSublist = new Sublist(options);

        this.sublists[sublistId] = newSublist;
      }
    }
  }

  setSublistValue(options){
    const sublistId = options.sublistId;
    const fieldId = options.fieldId;
    const value = options.value;
    const line = options.line;

    this.sublists[sublistId].setSublistValue(options);
  }

  getSublistValue(options){
    const sublistId = options.sublistId;
    const index = options.line;
    const field = options.fieldId;
    return this.sublists[sublistId].getSublistValue(options);
  }

  getSublist(options) {
    var sublistId = options.id;
    return this.sublists[sublistId];
  }
}
