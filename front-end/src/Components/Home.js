import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <b>FootyTrends </b>/ Performance Trends of Football Teams
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title="Roles" id="basic-nav-dropdown">
                <NavDropdown.Item>Management</NavDropdown.Item>
                <NavDropdown.Item>Agents</NavDropdown.Item>
                <NavDropdown.Item>Public</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
