import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/PageGameSelect">Game Select</Link>
            <Link className="nav-link" to="/PageCharacterSelect">Character Select</Link>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
    </header>
  );
};

export default Header;
