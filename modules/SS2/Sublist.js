const Field = require('./Field');

module.exports = class Sublist {
  constructor(options) {
    this.label = options.label;
    this.displayType = options.displayType;
    this.lineCount = 0;

    this.vals = [];
    this.fields = {};

    if (options.lines) {
      this._addLines(options.lines);
    }
  }
  addNewLine() {
    this.vals.push({});
    this.lineCount++;
  }

  _addLines(lines) {
    this.vals = lines;
    this.lineCount = lines.length;
  }

  addField(options) {
    const newField = new Field(options);
    this.fields[options.id] = newField;
    return newField;
  }

  getSublistValue(options) {
    const sublistId = options.sublistId;
    const line = options.line;
    const field = options.fieldId;
    return this.vals[line][field];
  }

  setSublistValue(options) {
    const sublistId = options.sublistId;
    const fieldId = options.fieldId;
    const value = options.value;
    const line = options.line;

    while (this.vals.length <= line) {
      this.vals.push({});
    }

    this.vals[line][fieldId] = value;
  }

  addButton(options) { }
  addMarkAllButtons() {}
  addRefreshButton() {}
  getField(options) { }
}
