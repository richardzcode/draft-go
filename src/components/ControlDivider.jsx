import React from 'react';

import GoTheme from '../themes';

const ControlDivider = (props) => {
  let style = props.theme || GoTheme.toolbar.controls.control;
  style = Object.assign({}, style, { width: 'auto', color: '#ddd' });

  return (
    <span style={style} {...props}>|</span>
  )
}

export default ControlDivider;
