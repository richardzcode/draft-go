import { convertToRaw } from 'draft-js';

function convertToHTML(contentState) {
  const raw = convertToRaw(contentState);
  const { blocks, entityMap } = raw;
  let html = '';
  let ul_items = [];
  let ol_items = [];
  for (var i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const { type } = block;
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
  const { type } = block;
  if (type.startsWith('header-')) {
    return convertHeader(type.substr(7), block);
  }
  if (type === 'blockquote') {
    return convertBlockquote(block, entityMap);
  }
  if (type === 'code-block') {
    return convertCodeBlock(block, entityMap);
  }
  if (type === 'unordered-list-item') {
  }
  if (type === 'atomic') {
    return convertAtomic(block, entityMap);
  }
  return convertUnstyled(block, entityMap);
}

function convertOrderedListItems(items, entityMap) {
  if (items.length === 0) { return ''; }
  return '<ol class="go-ordered-list">'
    + items.map(item => convertListItem(item, entityMap, 'ordered')).join('')
    + '</ol>';
}

function convertUnorderedListItems(items, entityMap) {
  if (items.length === 0) { return ''; }
  return '<ul class="go-unordered-list">'
    + items.map(item => convertListItem(item, entityMap, 'unordered')).join('')
    + '</ul>';
}

function convertListItem(item, entityMap, o_u) {
  const { text } = item;
  return '<li class="go-' + o_u + '-list-item">' + text + '</li>';
}

function convertHeader(level, block) {
  const levelMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6
  }
  const levelVal = levelMap[level];
  const { text } = block;
  if (!levelVal) { return '<p>' + text + '</p>'; }

  return [
    '<h' + levelVal + ' class="go-header-' + level + '">',
    text,
    '</h' + levelVal + '>'
  ].join('');
}

function convertBlockquote(block, entityMap) {
  const { text } = block;
  return '<blockquote class="go-blockquote">' + text + '</blockquote>';
}

function convertCodeBlock(block, entityMap) {
  const { text } = block;
  return '<pre class="go-code-block">' + text + '</pre>';
}

function convertAtomic(block, entityMap) {
  const { entityRanges } = block;
  return entityRanges.map(range => convertAtomicEntityRange(range, entityMap))
    .join('');
}

function convertAtomicEntityRange(range, entityMap) {
  const { offset, length } = range;
  let result = '';
  for (var i = offset; i < offset + length; i++) {
    if (i < 0 || i >= entityMap.length) { continue; }
    const entity = entityMap[i];
    const { type } = entity;
    if (type === 'image') {
      result += convertImageEntity(entity);
    }
  }
  return '<figure class="go-atomic">' + result + '</figure>';
}

function convertImageEntity(entity) {
  const { src } = entity.data;
  return '<img src="' + src + '"/>';
}

function convertUnstyled(block, entityMap) {
  const { text } = block;
  return '<p class="go-unstyled">' + text + '</p>';
}

export { convertToHTML };
