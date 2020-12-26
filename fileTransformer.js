// // fileTransformer.js
// const path = require('path');

// module.exports = {
//   process(src, filename, config, options) {
//     return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
//   },
// };


var path = require("path");

module.exports = {
  process: function process(src, filename, config, options) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  }
};