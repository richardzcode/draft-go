import React, { Component } from 'react';

import GoTheme from '../themes/GoTheme';

export default class ImageBlock extends Component {
  render() {
    const { contentState, block } = this.props;
    const entity = contentState.getEntity(
      block.getEntityAt(0)
    );
    const data = entity.getData();
    const src = data.src;

    return (
      <img src={src} />
    )
  }
}
