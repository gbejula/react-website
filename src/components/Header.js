import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
  <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Delicious Meals</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    )
}

export default Header
