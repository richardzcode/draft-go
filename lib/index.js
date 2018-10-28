'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToHTML = undefined;

var _converter = require('./converter');

Object.defineProperty(exports, 'convertToHTML', {
  enumerable: true,
  get: function get() {
    return _converter.convertToHTML;
  }
});

var _GoEditor = require('./GoEditor');

var _GoEditor2 = _interopRequireDefault(_GoEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _GoEditor2.default;