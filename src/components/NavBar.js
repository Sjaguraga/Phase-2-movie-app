import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Nav>
          <div className="link-wrapper">
            <div>
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
              <NavLink to="/addmovie">Add New Movie</NavLink>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
