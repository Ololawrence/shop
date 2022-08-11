import React from 'react'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const FashionNav = () => {
  return (
    <Navbar>
      <Container className="nav">
        <Nav className="me-auto">
          <Nav.Link className="navs">
            <Link to="/fashion">
              <svg
                style={{ color: "red" }}
                xmlns="http://www.w3.org/2000/svg"
                width="26px"
                height="26px"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </Link>
          </Nav.Link>
          <Nav.Link className="navs">
            <Link to="/women">women</Link>
          </Nav.Link>
          <Nav.Link className="navs">
            <Link to="/men">Men</Link>
          </Nav.Link>
          <Nav.Link className="navs">
            <Link to="/girls">girls</Link>
          </Nav.Link>
          <Nav.Link className="navs">
            <Link to="/boys">boys</Link>
          </Nav.Link>
          <Nav.Link className="navs">
            <Link to="/babies">Babies</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FashionNav;