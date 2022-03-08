import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/movielist">Movie List</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/favoritemovies">Favorite Movies</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
