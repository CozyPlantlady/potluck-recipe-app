import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../components/styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand className={styles.logo} variant="white" href="#home"><img src={logo} alt="logo" height="60" /> Potlucky</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link className={styles.navbartext} href="#home">Home</Nav.Link>
                  <Nav.Link className={styles.navbartext} href="#profile">Profile</Nav.Link>
                  <Form>
                    <FormControl type="text" placeholder="find a recipe"/>
                    <Button variant="light">Search</Button>
                  </Form>
                </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

export default NavBar