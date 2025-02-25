import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css'; // Import the custom CSS

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="py-3 vec">
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand className='vecci' href="#"><b>VECCI</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className='toggle'/>
        <Navbar.Collapse id="navbar-nav" className="justify-content-center nav-gap">
          <Nav className="text-center">
            <Nav.Link href="#home" className="home">Home</Nav.Link>
            <Nav.Link href="#about" className="home">Explore</Nav.Link>
            <Nav.Link href="#services" className="home">Marketplace</Nav.Link>
            <Nav.Link href="#blog" className="home">Investor</Nav.Link>
            <Nav.Link href="#contact" className="home">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="primary">Buy Now</Button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
