import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from './logo.svg';

const Header = () => {
  return (
    <header className="">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand to="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Icon Fighter'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/PageGameSelect">Game Select</Nav.Link>
            <Nav.Link href="/PageCharacterSelect">Character Select</Nav.Link>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
    </header>
  );
};

export default Header;
