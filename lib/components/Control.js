'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _themes = require('../themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(props) {
  var style = props.theme || _themes2.default.toolbar.controls.control;
  var p = _fsts.JS.lessProps(props, 'theme');

  return _react2.default.createElement(
    'span',
    _extends({ style: style }, p),
    props.children
  );
};

exports.default = Control;