import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Fashion Outfits</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Services</Nav.Link>
              <Nav.Link href='#pricing' className='mr-2'>
                About Us
              </Nav.Link>
            </Nav>
            <Button variant='primary mr-2'>
              <Link to='/login'>Login</Link>
            </Button>
            <Button variant='secondary'>Sign Up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
