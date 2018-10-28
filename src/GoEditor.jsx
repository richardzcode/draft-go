import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import { Logger } from 'fsts';

import { Toolbar, ImageBlock } from './components';
import GoTheme from './themes';
import {
  toggleMap,
  getElement,
  selectionRect,
  fileToDataUrl
} from './utils';
import './Go.css';

const logger = new Logger('GoEditor');

export default class GoEditor extends Component {
  constructor(props) {
    super(props);

    this.positionToolbar = this.positionToolbar.bind(this);
    this.setEditorState = this.setEditorState.bind(this);
    this.handleEditorStateChange = this.handleEditorStateChange.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);

    this.editorRef = React.createRef();

    const editorState = props.editorState || EditorState.createEmpty();
    this.state = {
      editorState,
      toolbarY: 0
    };
  }

  positionToolbar() {
    let rect = selectionRect();
    if (!rect) { return; }

    const containerRect = getElement('go_editor_container')
      .getBoundingClientRect();

    const y = (rect.y < 0? 0 : rect.y) - containerRect.y;

    const { toolbarY } = this.state;
    if (y !== toolbarY) {
      this.setState({ toolbarY: y});
    }
  }

  setEditorState(editorState) {
    this.setState({editorState});
    const { onChange } = this.props;
    if (onChange) { onChange(editorState); }
  }

  handleEditorStateChange(editorState) {
    this.setEditorState(editorState);
  }

  handleControlClick(id, data) {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    const block = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey());

    switch(id) {
      case 'header':
        this.toggleBlockType(editorState, block, toggleMap.header, 'header-one');
        break;
      case 'list':
        this.toggleBlockType(editorState, block, toggleMap.list, 'unordered-list-item');
        break;
      case 'quote':
        this.toggleBlockType(editorState, block, toggleMap.quote, 'blockquote');
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

  toggleBlockType(editorState, block, toggleMap, defaultType) {
    const type = block.getType();
    const toggleType = toggleMap[type] || defaultType;
    const state = RichUtils.toggleBlockType(editorState, toggleType);
    this.setEditorState(state);
  }

  toggleInlineStyle(editorState, style) {
    const state = RichUtils.toggleInlineStyle(editorState, style);
    this.setEditorState(state);
  }

  insertImage(file) {
    const theme = this.props.theme || GoTheme;
    const { editorState } = this.state;
    const fn = this.props.imageFileToUrl || fileToDataUrl;
    fn(file, (url) => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'image',
        'IMMUTABLE',
        { src: url, theme: theme }
      )
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(
        editorState,
        {currentContent: contentStateWithEntity}
      );

      const state = AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      );
      this.setEditorState(state);
    });
  }

  imageBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: ImageBlock,
        editable: false,
      };
    }
    return null;
  }

  componentDidUpdate() {
    this.positionToolbar();
  }

  render() {
    const editorRef = this.props.editorRef;
    const { editorState, toolbarY } = this.state;
    const style = this.props.theme || GoTheme;

    return (
      <div id="go_editor_container" style={style}>
        <Toolbar
          theme={style.toolbar}
          y={toolbarY}
          onControlClick={this.handleControlClick}
        />
        <div className="go-editor" style={style.editor}>
          <Editor
            blockStyleFn={(block) => 'go-' + block.type}
            blockRendererFn={this.imageBlockRenderer}
            editorState={editorState}
            onChange={this.handleEditorStateChange}
            ref={editorRef}
          />
        </div>
      </div>
    )
  }
}
