const Record = require("./Record")

module.exports = class NRecord {
  constructor() {
    this.Record = Record;
    this.Type = {
      CUSTOMER:              'customer',
      ITEM:                  'item',
      ITEM_FULFILLMENT:      'itemfulfillment',
      LOCATION:              'location',
      MANUFACTURING_ROUTING: 'manufacturingrouting'
    }
    this.records = [];
  }

  create(options) {
    const newRec = new Record(options);
    this.addRecord(newRec);
    return newRec;
  }

  load(options) {
    var records = this.records.filter(record => (record.id == options.id && record.type == options.type));
    if(records && records.length > 0) {
      return records[0]
    }
  }

  addRecord(record) {
    this.records.push(record)
  }

}
