import React from 'react';
import { JS } from 'fsts';

import GoTheme from '../themes';

const Control = (props) => {
  const style = props.theme || GoTheme.toolbar.controls.control;
  const p = JS.lessProps(props, 'theme');

  return (
    <span style={style} {...p}>
      {props.children}
    </span>
  )
}

export default Control;
