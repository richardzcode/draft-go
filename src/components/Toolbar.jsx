import React, { Component } from 'react';
import { JS } from 'fsts';

import {
  Type,
  List,
  ChevronRight,
  Bold,
  Italic,
  Underline
} from './icons';
import Control from './Control';
import ImageControl from './ImageControl';
import ControlDivider from './ControlDivider';
import GoTheme from '../themes/GoTheme';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.handleControlClick = this.handleControlClick.bind(this);

    this.state = { expand: false }
  }

  handleControlClick(id, data) {
    const { onControlClick } = this.props;
    if (onControlClick) { onControlClick(id, data); }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.y !== this.props.y) {
      this.setState({ expand: false });
    }
  }

  render() {
    const y = this.props.y || -1000;
    const { expand } = this.state;

    let style = this.props.theme || GoTheme.toolbar;
    style = Object.assign({}, style, { top: y });
    const controlTheme = style.controls.control;
    const dividerTheme = style.controls.controlDivider;

    const p = JS.lessProps(this.props, ['theme', 'y', 'onControlClick']);

    return (
      <div style={style} {...p}>
        <div
          style={style.button}
          onClick={() => this.setState({ expand: !this.state.expand })}
        >
        </div>
        { expand && (
          <div style={style.controls}>
            <Control theme={controlTheme} onClick={() => this.handleControlClick('header')}>
              <Type />
            </Control>
            <Control theme={controlTheme} onClick={() => this.handleControlClick('list')}>
              <List />
            </Control>
            <Control theme={controlTheme} onClick={() => this.handleControlClick('quote')}>
              <ChevronRight />
            </Control>
            <ControlDivider theme={dividerTheme} />
            <Control theme={controlTheme} onClick={() => this.handleControlClick('bold')}>
              <Bold />
            </Control>
            <Control theme={controlTheme} onClick={() => this.handleControlClick('italic')}>
              <Italic />
            </Control>
            <Control theme={controlTheme} onClick={() => this.handleControlClick('underline')}>
              <Underline />
            </Control>
            <ControlDivider theme={dividerTheme} />
            <ImageControl
              theme={controlTheme}
              onSelected={(file) => this.handleControlClick('image', file)}
            />
          </div>
        )}
      </div>
    )
  }
}
