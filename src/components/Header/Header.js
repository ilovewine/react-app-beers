import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
  render = () => (
    <Navbar sticky="top" bg="primary" className="navbar-dark" expand="md">
      <LinkContainer to="/">
        <Navbar.Brand>Beers</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ml-auto mr-sm-2">
          <LinkContainer to="/add">
            <Nav.Link>&#43; Add new beer</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
