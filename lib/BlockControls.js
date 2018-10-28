'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _GoTheme = require('./GoTheme');

var _GoTheme2 = _interopRequireDefault(_GoTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function Control(props) {
  var theme = props.theme || _GoTheme2.default;
  var style = theme.blockControl;
  return _react2.default.createElement(
    'span',
    _extends({ style: style }, props),
    props.children
  );
};

var ControlDivider = function ControlDivider(props) {
  var theme = props.theme || _GoTheme2.default;
  var style = Object.assign({}, theme.blockControl, { width: 'auto', color: '#ddd' });
  return _react2.default.createElement(
    'span',
    _extends({ style: style }, props),
    '|'
  );
};

var BlockControls = function (_Component) {
  _inherits(BlockControls, _Component);

  function BlockControls(props) {
    _classCallCheck(this, BlockControls);

    var _this = _possibleConstructorReturn(this, (BlockControls.__proto__ || Object.getPrototypeOf(BlockControls)).call(this, props));

    _this.handleControlClick = _this.handleControlClick.bind(_this);

    _this.state = { expand: false };
    return _this;
  }

  _createClass(BlockControls, [{
    key: 'handleControlClick',
    value: function handleControlClick(id) {
      var onControlClick = this.props.onControlClick;

      if (onControlClick) {
        onControlClick(id);
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


      var theme = this.props.theme || _GoTheme2.default;
      var style = Object.assign({}, theme.blockControls, { top: y });

      return _react2.default.createElement(
        'div',
        { id: 'go_editor_block_controls', style: style },
        _react2.default.createElement('div', { id: 'go_editor_block_controls_button',
          style: style.button,
          onClick: function onClick() {
            return _this2.setState({ expand: !_this2.state.expand });
          }
        }),
        expand && _react2.default.createElement(
          'div',
          { style: style.controls },
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('header');
              } },
            _react2.default.createElement(_icons.Type, null)
          ),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('list');
              } },
            _react2.default.createElement(_icons.List, null)
          ),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('quote');
              } },
            _react2.default.createElement(_icons.ChevronRight, null)
          ),
          _react2.default.createElement(ControlDivider, { theme: theme }),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('bold');
              } },
            _react2.default.createElement(_icons.Bold, null)
          ),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('italic');
              } },
            _react2.default.createElement(_icons.Italic, null)
          ),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('underline');
              } },
            _react2.default.createElement(_icons.Underline, null)
          ),
          _react2.default.createElement(ControlDivider, { theme: theme }),
          _react2.default.createElement(
            Control,
            { theme: theme, onClick: function onClick() {
                return _this2.handleControlClick('photo');
              } },
            _react2.default.createElement(_icons.Camera, null)
          )
        )
      );
    }
  }]);

  return BlockControls;
}(_react.Component);

exports.default = BlockControls;