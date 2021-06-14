import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Fashion Outfits</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#features'>Services</Nav.Link>
              <Nav.Link href='#pricing'>About Us</Nav.Link>
            </Nav>
            <Button variant='primary mr-2'>Login</Button>
            <Button variant='secondary'>Sign Up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
