import React from 'react';

import GoTheme from '../themes';

const Control = (props) => {
  const style = props.theme || GoTheme.toolbar.controls.control;
  return (
    <span style={style} {...props}>
      {props.children}
    </span>
  )
}

export default Control;
