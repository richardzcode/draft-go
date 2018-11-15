# draft-go

Grab and go draft.js editor

## Install

```
npm install --save draft-go
```

## Usage

```javascript
import React, { Component } from 'react';
import GoEditor from 'draft-go';

export default class Main extends Component {
  render() {
    return (
      <div as="main" role="main">
        <GoEditor
          onChange={(editorState) => this.setState({editorState})}
        />
      </div>
    )
  }
}
```

[Live Demo](https://richardz.io/draft-go/)
