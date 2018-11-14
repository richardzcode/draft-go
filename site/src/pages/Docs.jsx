import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import MD from 'bootstrap-4-md-parser';

import docs from '../docs';

const md = new MD();

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.loadDoc = this.loadDoc.bind(this);
    this.state = { content: '' }
  }

  componentDidMount() {
    this.loadDoc();
  }

  loadDoc() {
    md.fetch(docs.get_started)
      .then(html => this.setState({ content: html }));
  }

  render() {
    const { content } = this.state;
    return (
      <Container
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </Container>
    )
  }
}
