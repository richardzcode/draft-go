'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _themes = require('../themes');

var _themes2 = _interopRequireDefault(_themes);

var _icons = require('./icons');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CameraControl = function (_Component) {
  _inherits(CameraControl, _Component);

  function CameraControl(props) {
    _classCallCheck(this, CameraControl);

    var _this = _possibleConstructorReturn(this, (CameraControl.__proto__ || Object.getPrototypeOf(CameraControl)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CameraControl, [{
    key: 'handleClick',
    value: function handleClick() {
      (0, _utils.getElement)('go_editor_file_input').click();
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme || _themes2.default;
      var style = theme.blockControl;
      var p = _fsts.JS.lessProps(this.props, 'onClick');
      return _react2.default.createElement(
        'span',
        _extends({ style: style, onClick: this.handleClick }, p),
        _react2.default.createElement(_icons.Camera, null),
        _react2.default.createElement('input', { type: 'file', style: { visibility: 'hidden', width: '0', height: '0' }, id: 'test' })
      );
    }
  }]);

  return CameraControl;
}(_react.Component);

exports.default = CameraControl;