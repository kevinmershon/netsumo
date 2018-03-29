const console = require('console');

module.exports = class NLog {
  constructor() { }

  debug(msg) {
    console.debug(msg);
  }
  audit(msg) {
    console.log(msg);
  }
  emergency(msg) {
    console.warn(msg)
  }
  error(msg) {
    console.error(msg);
  }
}
