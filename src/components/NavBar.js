import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../components/styles/NavBar.module.css'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="info" variant="dark" expand="lg" fixed="top">
        <Container>
          <NavLink exact to="/">
            <Navbar.Brand 
            className={styles.logo} 
            variant="white">
              <img src={logo} alt="logo" height="100" />Potlucky
            </Navbar.Brand>
          </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                  <Form>
                    <FormControl type="text" placeholder="find a recipe"/>
                    <Button variant="light">Search</Button>
                  </Form>
                <Nav className="ml-auto">
                  <NavLink 
                  to="/"
                  className={styles.NavLink}
                  >Home
                  </NavLink>
                  <NavLink 
                  to="/profile"
                  className={styles.NavLink}>
                  Profile
                  </NavLink>
                </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

export default NavBar