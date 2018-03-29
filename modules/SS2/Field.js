module.exports = class Field {
  constructor(options) {
    this.alias          = options.alias;
    this.defaultValue   = options.defaultValue;
    this.id             = options.id;
    this.isMandatory    = options.isMandatory;
    this.label          = options.label;
    this.maxLength      = options.maxLength;
    this.padding        = options.padding;
    this.richTextHeight = options.richTextHeight;
    this.richTextWidth  = options.richTextWidth;
    this.type           = options.type;

    this.selectOptions = [];
  }

  addSelectOption(options) {
    this.selectOptions.push(options);
  }

  getSelectOptions(options) {
    return this.selectOptions;
  }

  setHelpText(options) { }
  updateBreakType(options) { }
  updateDisplaySize(options) { }
  updateDisplayType(options) { }
  updateLayoutType(options) { }

}
