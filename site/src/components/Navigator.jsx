import React, { Component } from 'react';
import { Navbar, Nav, BSpan } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const HomeItems = (props) => (
  <React.Fragment>
    <Nav.ItemLink href="#/" active>
      Home
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/docs">
      Docs
    </Nav.ItemLink>
  </React.Fragment>
)

const DocsItems = (props) => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/docs" active>
      Docs
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
  </React.Fragment>
)

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="dark" fixed="top">
        <Navbar.Brand href="#">draft-go</Navbar.Brand>
        <Navbar.Nav>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomeItems} />
              <Route exact path="/docs" component={DocsItems} />
            </Switch>
          </HashRouter>
        </Navbar.Nav>
      </Navbar>
    )
  }
}
