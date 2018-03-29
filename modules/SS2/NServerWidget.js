const Field   = require('./Field');
const Form    = require('./Form');
const Sublist = require('./Sublist');

module.exports = class NServerWidget {
  constructor() {
    this.Assistant  = {};      // implement as needed
    this.Field      = Field;   // implement as needed
    this.FieldGroup = {};      // implement as needed
    this.Form       = Form;
    this.List       = {};      // implement as needed
    this.ListColumn = {};      // implement as needed
    this.Sublist    = Sublist; // implement as needed
    this.Tab        = {};      // implement as needed

    this.forms = [];
  }

  createForm(options) {
    const newForm = new Form(options);
    this.forms.push(newForm);
    return newForm;
  }

  createAssistant(options) { }
  createList(options) { }

}
