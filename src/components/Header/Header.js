import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends React.Component {
  render = () => (
    <Navbar sticky="top" bg="primary" className="navbar-dark" expand="md">
      <Navbar.Brand className="m-0" as="h1" href="/">
        Beers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ml-auto mr-sm-2">
          <Nav.Link href="/add">Add new beer</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
