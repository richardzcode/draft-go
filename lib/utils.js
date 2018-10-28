'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggleMap = {
  'header': {
    'unstyled': 'header-one',
    'header-one': 'header-two',
    'header-two': 'header-three',
    'header-three': 'header-four',
    'header-four': 'header-five',
    'header-five': 'header-six',
    'header-six': 'header-six'
  },
  list: {
    'unstyled': 'unordered-list-item',
    'unordered-list-item': 'ordered-list-item',
    'ordered-list-item': 'ordered-list-item'
  },
  quote: {
    'unstyled': 'blockquote',
    'blockquote': 'code-block',
    'code-block': 'code-block'
  }
};

function getElement(id) {
  return window.document.getElementById(id);
}

function closestEditorElement(el) {
  while (el) {
    if (el.getAttribute) {
      if (el.getAttribute('data-offset-key')) {
        return el;
      }
      if (el.getAttribute('class') === 'DraftEditor-root') {
        return el;
      }
    }
    el = el.parentNode;
  }
  return null;
}

function selectionRect() {
  var selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var range = selection.getRangeAt(0);
  if (!range) {
    return null;
  }

  var container = range.startContainer;
  if (!container) {
    return null;
  }

  container = closestEditorElement(container);
  if (!container || !container.getBoundingClientRect) {
    return null;
  }

  return container.getBoundingClientRect();
}

function fileToDataUrl(file, callback) {
  if (!file) {
    return;
  }

  var reader = new FileReader();
  reader.onload = function (event) {
    callback(event.target.result);
  };
  reader.readAsDataURL(file);
}

exports.toggleMap = toggleMap;
exports.getElement = getElement;
exports.selectionRect = selectionRect;
exports.fileToDataUrl = fileToDataUrl;