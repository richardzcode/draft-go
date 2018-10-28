'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _themes = require('../themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlDivider = function ControlDivider(props) {
  var style = props.theme || _themes2.default.toolbar.controls.control;
  style = Object.assign({}, style, { width: 'auto', color: '#ddd' });

  return _react2.default.createElement(
    'span',
    _extends({ style: style }, props),
    '|'
  );
};

exports.default = ControlDivider;