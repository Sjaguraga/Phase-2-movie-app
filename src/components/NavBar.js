import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Nav className="me-auto">
          <div className="home">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className="home">
            <NavLink to="/movielist">Movie List</NavLink>
          </div>
          <div className="home">
            <NavLink to="/favoritemovies">Favorite Movies</NavLink>
          </div>
          <div className="home">
            <NavLink to="/addmovie">Add a new movie</NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
