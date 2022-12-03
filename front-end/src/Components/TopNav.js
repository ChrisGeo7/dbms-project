import React, { useState } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const TopNav = () => {
  const [show, setShow] = useState(false);
  const [tcount, setTcount] = useState([]);
  const handleClose = () => setShow(false);
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
              <NavDropdown title="Federations" id="basic-nav-dropdown">
                <LinkContainer to="/query3">
                  <NavDropdown.Item>Trend in Goals</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/query4">
                  <NavDropdown.Item>European Performance</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Public" id="basic-nav-dropdown">
                <LinkContainer to="/query1">
                  <NavDropdown.Item>Booking Trend</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Management" id="basic-nav-dropdown">
                <LinkContainer to="/query2">
                  <NavDropdown.Item>Market Valuation Trend</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/query5">
                  <NavDropdown.Item>Win Comparison</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <Button
                variant="dark"
                onClick={() => {
                  axios(`http://localhost:5000/count`)
                    .then((response) => {
                      if (response.status === 200) {
                        setTcount(response.data.rows[0].TCOUNT);
                      }
                    })
                    .then(() => {})
                    .catch((err) => {});

                  setShow(true);
                }}
              >
                Tuple Count
              </Button>

              {/* <Nav.Link
                href="https://www.kaggle.com/datasets/davidcariboo/player-scores"
                target="_blank"
              >
                Data
              </Nav.Link> */}
            </Nav>
            {console.log(tcount)}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tuple Count</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Our Database has {tcount} number of tuples in all tables{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopNav;
