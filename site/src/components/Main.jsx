import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home, Docs, NotFound } from '../pages';

export default class Main extends Component {
  render() {
    return (
      <Container as="main" role="main">
        <HashRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Home />} />
            <Route exact path="/docs" render={(props) => <Docs />} />
            <Route render={(props) => <NotFound />} />
          </Switch>
        </HashRouter>
      </Container>
    )
  }
}
