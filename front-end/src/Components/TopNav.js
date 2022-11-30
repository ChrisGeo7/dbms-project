import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const TopNav = () => {
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
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Roles" id="basic-nav-dropdown">
                <LinkContainer to="/manager">
                  <NavDropdown.Item>Management</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/agent">
                  <NavDropdown.Item>Agents</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/public">
                  <NavDropdown.Item>Public</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Nav.Link>About</Nav.Link>

              <Nav.Link
                href="https://www.kaggle.com/datasets/davidcariboo/player-scores"
                target="_blank"
              >
                Data
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
