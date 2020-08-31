import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const navBar = () => {
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Code</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.item>
          <Nav.item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.item>
          <Nav.item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>;
};
