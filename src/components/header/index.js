import React from "react";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header(){
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Hoja de vida</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Quienes somos?</Nav.Link>
            <Nav.Link href="/education">Mis Estudios</Nav.Link>
            <Nav.Link href="/interests">Experiencia</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;


