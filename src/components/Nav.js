import { Link, NavLink, HashRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { LinkContainer } from "react-router-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import "./components.css";

const Navigation = () => {
  return (
    <HashRouter>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <IndexLinkContainer to="/">
          <Nav.Link>Akseli's specials</Nav.Link>
        </IndexLinkContainer>
        <NavbarCollapse>
          <Nav variant="tabs">
            <LinkContainer to="/allRecipes">
              <Nav.Link>Recipes</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/add">
              <Nav.Link>Add recipe</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </HashRouter>
  );
};

export default Navigation;
