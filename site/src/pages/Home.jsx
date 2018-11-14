import React, { Component } from 'react';
import { Container, Lead, Button, BDiv } from 'bootstrap-4-react';
import GoEditor, { convertToHTML } from 'draft-go';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleEditorStateChange = this.handleEditorStateChange.bind(this);

    this.state = { previewHtml: '' }
  }

  handleEditorStateChange(editorState) {
    const contentState = editorState.getCurrentContent();
    const html = convertToHTML(contentState);
    this.setState({ previewHtml: html });
  }

  render() {
    const { previewHtml } = this.state;
    return (
      <React.Fragment>
        <Lead>
          Draft.js is a framework for building rich text editors in React.
        </Lead>
        <Lead>
          draft-go built on top gives an editor that can be used without further customization.
        </Lead>
        <GoEditor
          placeholder="Tell a story ..."
          onChange={this.handleEditorStateChange}
        />
        <Container
          style={{ marginTop: '2rem' }}
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
        <BDiv text="center">
          <Button lg success as="a" href="#/docs">Learn more about draft-go</Button>
        </BDiv>
      </React.Fragment>
    )
  }
}
