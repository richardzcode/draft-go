'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _fsts = require('fsts');

var _components = require('./components');

var _themes = require('./themes');

var _themes2 = _interopRequireDefault(_themes);

var _utils = require('./utils');

require('./Go.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _fsts.Logger('GoEditor');

var GoEditor = function (_Component) {
  _inherits(GoEditor, _Component);

  function GoEditor(props) {
    _classCallCheck(this, GoEditor);

    var _this = _possibleConstructorReturn(this, (GoEditor.__proto__ || Object.getPrototypeOf(GoEditor)).call(this, props));

    _this.positionToolbar = _this.positionToolbar.bind(_this);
    _this.setEditorState = _this.setEditorState.bind(_this);
    _this.handleEditorStateChange = _this.handleEditorStateChange.bind(_this);
    _this.handleControlClick = _this.handleControlClick.bind(_this);

    _this.editorRef = _react2.default.createRef();

    var editorState = props.editorState || _draftJs.EditorState.createEmpty();
    _this.state = {
      editorState: editorState,
      toolbarY: 0
    };
    return _this;
  }

  _createClass(GoEditor, [{
    key: 'positionToolbar',
    value: function positionToolbar() {
      var rect = (0, _utils.selectionRect)();
      if (!rect) {
        return;
      }

      var containerRect = (0, _utils.getElement)('go_editor_container').getBoundingClientRect();

      var y = (rect.y < 0 ? 0 : rect.y) - containerRect.y;

      var toolbarY = this.state.toolbarY;

      if (y !== toolbarY) {
        this.setState({ toolbarY: y });
      }
    }
  }, {
    key: 'setEditorState',
    value: function setEditorState(editorState) {
      this.setState({ editorState: editorState });
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(editorState);
      }
    }
  }, {
    key: 'handleEditorStateChange',
    value: function handleEditorStateChange(editorState) {
      this.setEditorState(editorState);
    }
  }, {
    key: 'handleControlClick',
    value: function handleControlClick(id, data) {
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      var block = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());

      switch (id) {
        case 'header':
          this.toggleBlockType(editorState, block, _utils.toggleMap.header, 'header-one');
          break;
        case 'list':
          this.toggleBlockType(editorState, block, _utils.toggleMap.list, 'unordered-list-item');
          break;
        case 'quote':
          this.toggleBlockType(editorState, block, _utils.toggleMap.quote, 'blockquote');
          break;
        case 'bold':
          this.toggleInlineStyle(editorState, 'BOLD');
          break;
        case 'italic':
          this.toggleInlineStyle(editorState, 'ITALIC');
          break;
        case 'underline':
          this.toggleInlineStyle(editorState, 'UNDERLINE');
          break;
        case 'image':
          this.insertImage(data);
          break;
        default:
          logger.info('unknown block control');
      }
    }
  }, {
    key: 'toggleBlockType',
    value: function toggleBlockType(editorState, block, toggleMap, defaultType) {
      var type = block.getType();
      var toggleType = toggleMap[type] || defaultType;
      var state = _draftJs.RichUtils.toggleBlockType(editorState, toggleType);
      this.setEditorState(state);
    }
  }, {
    key: 'toggleInlineStyle',
    value: function toggleInlineStyle(editorState, style) {
      var state = _draftJs.RichUtils.toggleInlineStyle(editorState, style);
      this.setEditorState(state);
    }
  }, {
    key: 'insertImage',
    value: function insertImage(file) {
      var _this2 = this;

      var theme = this.props.theme || _themes2.default;
      var editorState = this.state.editorState;

      var fn = this.props.imageFileToUrl || _utils.fileToDataUrl;
      fn(file, function (url) {
        var contentState = editorState.getCurrentContent();
        var contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', { src: url, theme: theme });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        var newEditorState = _draftJs.EditorState.set(editorState, { currentContent: contentStateWithEntity });

        var state = _draftJs.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
        _this2.setEditorState(state);
      });
    }
  }, {
    key: 'imageBlockRenderer',
    value: function imageBlockRenderer(block) {
      if (block.getType() === 'atomic') {
        return {
          component: _components.ImageBlock,
          editable: false
        };
      }
      return null;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.positionToolbar();
    }
  }, {
    key: 'render',
    value: function render() {
      var editorRef = this.props.editorRef;
      var _state = this.state,
          editorState = _state.editorState,
          toolbarY = _state.toolbarY;

      var style = this.props.theme || _themes2.default;

      return _react2.default.createElement(
        'div',
        { id: 'go_editor_container', style: style },
        _react2.default.createElement(_components.Toolbar, {
          theme: style.toolbar,
          y: toolbarY,
          onControlClick: this.handleControlClick
        }),
        _react2.default.createElement(
          'div',
          { className: 'go-editor', style: style.editor },
          _react2.default.createElement(_draftJs.Editor, {
            blockStyleFn: function blockStyleFn(block) {
              return 'go-' + block.type;
            },
            blockRendererFn: this.imageBlockRenderer,
            editorState: editorState,
            onChange: this.handleEditorStateChange,
            ref: editorRef
          })
        )
      );
    }
  }]);

  return GoEditor;
}(_react.Component);

exports.default = GoEditor;