import React from 'react';
import { JS } from 'fsts';

import GoTheme from '../themes';

const ControlDivider = (props) => {
  const style = props.theme || GoTheme.toolbar.controls.controlDivider;
  const p = JS.lessProps(props, 'theme');

  return (
    <span style={style} {...p}>|</span>
  )
}

export default ControlDivider;
