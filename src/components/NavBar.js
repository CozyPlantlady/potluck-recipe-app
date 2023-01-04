import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../components/styles/NavBar.module.css'
import { NavLink } from "react-router-dom"
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {
  const currentUser = useCurrentUser;

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
    <p> You are currently logged out</p>
    <NavLink 
      to="/signup"
      className={styles.NavLink}
      >Sign up
      </NavLink>
      <NavLink 
      to="/login"
      className={styles.NavLink}
      >Login
    </NavLink>
    </>
  );

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
                  
                  {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

export default NavBar