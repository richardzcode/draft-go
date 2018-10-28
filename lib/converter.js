'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToHTML = undefined;

var _draftJs = require('draft-js');

function convertToHTML(contentState) {
  var raw = (0, _draftJs.convertToRaw)(contentState);
  var blocks = raw.blocks,
      entityMap = raw.entityMap;

  var html = '';
  var ul_items = [];
  var ol_items = [];
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var type = block.type;

    if (type === 'unordered-list-item') {
      html += convertOrderedListItems(ol_items, entityMap);
      ol_items = [];
      ul_items.push(block);
    } else if (type === 'ordered-list-item') {
      html += convertUnorderedListItems(ul_items, entityMap);
      ul_items = [];
      ol_items.push(block);
    } else {
      html += convertOrderedListItems(ol_items, entityMap);
      html += convertUnorderedListItems(ul_items, entityMap);
      ol_items = [];
      ul_items = [];
      html += convertBlock(block, entityMap);
    }
  }
  return '<div class="go-editor">' + html + '</div>';
}

function convertBlock(block, entityMap) {
  var type = block.type;

  if (type.startsWith('header-')) {
    return convertHeader(type.substr(7), block);
  }
  if (type === 'blockquote') {
    return convertBlockquote(block, entityMap);
  }
  if (type === 'code-block') {
    return convertCodeBlock(block, entityMap);
  }
  if (type === 'unordered-list-item') {}
  if (type === 'atomic') {
    return convertAtomic(block, entityMap);
  }
  return convertUnstyled(block, entityMap);
}

function convertOrderedListItems(items, entityMap) {
  if (items.length === 0) {
    return '';
  }
  return '<ol class="go-ordered-list">' + items.map(function (item) {
    return convertListItem(item, entityMap, 'ordered');
  }).join('') + '</ol>';
}

function convertUnorderedListItems(items, entityMap) {
  if (items.length === 0) {
    return '';
  }
  return '<ul class="go-unordered-list">' + items.map(function (item) {
    return convertListItem(item, entityMap, 'unordered');
  }).join('') + '</ul>';
}

function convertListItem(item, entityMap, o_u) {
  var text = item.text;

  return '<li class="go-' + o_u + '-list-item">' + text + '</li>';
}

function convertHeader(level, block) {
  var levelMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6
  };
  var levelVal = levelMap[level];
  var text = block.text;

  if (!levelVal) {
    return '<p>' + text + '</p>';
  }

  return ['<h' + levelVal + ' class="go-header-' + level + '">', text, '</h' + levelVal + '>'].join('');
}

function convertBlockquote(block, entityMap) {
  var text = block.text;

  return '<blockquote class="go-blockquote">' + text + '</blockquote>';
}

function convertCodeBlock(block, entityMap) {
  var text = block.text;

  return '<pre class="go-code-block">' + text + '</pre>';
}

function convertAtomic(block, entityMap) {
  var entityRanges = block.entityRanges;

  return entityRanges.map(function (range) {
    return convertAtomicEntityRange(range, entityMap);
  }).join('');
}

function convertAtomicEntityRange(range, entityMap) {
  var offset = range.offset,
      length = range.length;

  var result = '';
  for (var i = offset; i < offset + length; i++) {
    if (i < 0 || i >= entityMap.length) {
      continue;
    }
    var entity = entityMap[i];
    var type = entity.type;

    if (type === 'image') {
      result += convertImageEntity(entity);
    }
  }
  return '<figure class="go-atomic">' + result + '</figure>';
}

function convertImageEntity(entity) {
  var src = entity.data.src;

  return '<img src="' + src + '"/>';
}

function convertUnstyled(block, entityMap) {
  var text = block.text;

  return '<p class="go-unstyled">' + text + '</p>';
}

exports.convertToHTML = convertToHTML;