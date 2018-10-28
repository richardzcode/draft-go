import React, { Component } from 'react';
import { JS, Logger } from 'fsts';

import GoTheme from '../themes';
import { Camera } from './icons';
import { getElement } from '../utils';

const logger = new Logger('CameraControl');

export default class ImageControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  handleClick() {
    getElement('go_editor_file_input')
      .click();
  }

  handleSelectImage(fileList) {
    logger.info(fileList);
    if (!fileList || fileList.length === 0) {
      logger.info('selected nothing');
      return;
    }

    const file = fileList[0];
    logger.info('selected', file);
    const { onSelected } = this.props;
    if (onSelected) { onSelected(file); }

    getElement('go_editor_file_input_form')
      .reset();
  }

  render() {
    const style = this.props.theme || GoTheme.toolbar.controls.control;
    const p = JS.lessProps(this.props, ['onClick', 'onSelected']);
    return (
      <span style={style} onClick={this.handleClick} {...p}>
        <Camera />
        <form id="go_editor_file_input_form">
          <input
            type="file"
            accept="image/*"
            id="go_editor_file_input"
            style={style.fileInput}
            onChange={event => this.handleSelectImage(event.target.files)}
          />
        </form>
      </span>
    )
  }
}
