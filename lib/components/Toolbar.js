'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _ImageControl = require('./ImageControl');

var _ImageControl2 = _interopRequireDefault(_ImageControl);

var _ControlDivider = require('./ControlDivider');

var _ControlDivider2 = _interopRequireDefault(_ControlDivider);

var _GoTheme = require('../themes/GoTheme');

var _GoTheme2 = _interopRequireDefault(_GoTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.handleControlClick = _this.handleControlClick.bind(_this);

    _this.state = { expand: false };
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'handleControlClick',
    value: function handleControlClick(id, data) {
      var onControlClick = this.props.onControlClick;

      if (onControlClick) {
        onControlClick(id, data);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.y !== this.props.y) {
        this.setState({ expand: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var y = this.props.y || -1000;
      var expand = this.state.expand;


      var style = this.props.theme || _GoTheme2.default.toolbar;
      style = Object.assign({}, style, { top: y });
      var controlTheme = style.controls.control;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement('div', {
          style: style.button,
          onClick: function onClick() {
            return _this2.setState({ expand: !_this2.state.expand });
          }
        }),
        expand && _react2.default.createElement(
          'div',
          { style: style.controls },
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('header');
              } },
            _react2.default.createElement(_icons.Type, null)
          ),
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('list');
              } },
            _react2.default.createElement(_icons.List, null)
          ),
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('quote');
              } },
            _react2.default.createElement(_icons.ChevronRight, null)
          ),
          _react2.default.createElement(_ControlDivider2.default, { theme: controlTheme }),
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('bold');
              } },
            _react2.default.createElement(_icons.Bold, null)
          ),
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('italic');
              } },
            _react2.default.createElement(_icons.Italic, null)
          ),
          _react2.default.createElement(
            _Control2.default,
            { theme: controlTheme, onClick: function onClick() {
                return _this2.handleControlClick('underline');
              } },
            _react2.default.createElement(_icons.Underline, null)
          ),
          _react2.default.createElement(_ControlDivider2.default, { theme: controlTheme }),
          _react2.default.createElement(_ImageControl2.default, {
            theme: controlTheme,
            onSelected: function onSelected(file) {
              return _this2.handleControlClick('image', file);
            }
          })
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

exports.default = Toolbar;