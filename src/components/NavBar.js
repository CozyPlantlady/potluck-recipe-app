import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand variant="white" href="#home"><img src={logo} alt="logo" height="60" /> Potlucky</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="find a recipe" className="mr-sm-2" />
                <Button variant="light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar