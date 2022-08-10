import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoNav from "./LogoNav";
import "./Navigation.scss";
// import Search from "../Common/search";

const Navigation = () => {
  return (
    <>
      <div>
        <LogoNav />
      </div>

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav">
          <Container className="nav">
            <Navbar bg="light" expand="lg">
              <Container cla ssName="nav">
                <Navbar.Brand href="#home">Shop online</Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar>
              <Container className="nav">
                {/* <Search /> */}
              </Container>
            </Navbar>

            <Navbar>
              <Container className="nav">
                <Nav className="me-auto">
                  <Nav.Link className="navs">
                    <Link to="/register">Sign up</Link>
                  </Nav.Link>
                  <Nav.Link className="navs">
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                  <Nav.Link className="navs">
                    <Link to="/cart">cart</Link>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="toggle"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Online Market
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    {" "}
                    <Link to="/register">Register</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/about">About us</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contact">Contact Us</Link>
                  </Nav.Link>

                  <Nav.Link>
                    {" "}
                    <Link to="/fashion">Fashion</Link>
                  </Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
