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
              <NavDropdown title="Management" id="basic-nav-dropdown">
                <LinkContainer to="/query3">
                  <NavDropdown.Item>Trend in Goals</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Public" id="basic-nav-dropdown">
                <LinkContainer to="/query1">
                  <NavDropdown.Item>Booking Trend</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Agent" id="basic-nav-dropdown">
                <LinkContainer to="/query2">
                  <NavDropdown.Item>Market Valuation Trend</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

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
