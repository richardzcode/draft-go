'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var container = {
  position: 'relative',
  paddingLeft: '2rem',
  paddingRight: '2rem'
};

var editor = {
  border: '1px solid #eee',
  padding: '0.5rem',
  lineHeight: '1.5rem'
};

var blockControls = {
  position: 'absolute',
  top: '0',
  left: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
  button: {
    width: '1.2rem',
    height: '1.2rem',
    border: '1px solid #aaa',
    borderRadius: '50%',
    pointerEvents: 'auto'
  },
  controls: {
    background: '#fff',
    border: '1px solid #aaa',
    borderRadius: '5px',
    padding: '0.25rem',
    marginLeft: '0.25rem',
    marginTop: '-3rem',
    display: 'flex',
    zIndex: '1',
    pointerEvents: 'auto'
  }
};

var blockControl = {
  display: 'flex',
  alignItems: 'center',
  margin: '0 0.25rem',
  width: '1.2rem',
  height: '1.2rem'
};

var fileInput = {
  position: 'absolute',
  left: '-1000rem',
  top: '-1000rem',
  opacity: 0
};

var GoTheme = {
  container: container,
  editor: editor,
  blockControls: blockControls,
  blockControl: blockControl,
  fileInput: fileInput
};

exports.default = GoTheme;