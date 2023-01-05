import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../components/styles/NavBar.module.css'
import { NavLink } from "react-router-dom"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from 'axios'

const NavBar = () => {
  const currentUser = useCurrentUser;
  const setCurrentUser = useSetCurrentUser;

  const handleLogOut = async () => {
    try {
        await axios.post("dj-rest-auth/logout/");
        setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addRecipe = (
    <NavLink 
    className={styles.NavLink}
    to="/recipe/create"
    >Add recipe
  </NavLink>
  );

  const loggedInIcons = 
  <>
    <NavLink 
      className={styles.NavLink}
      to="/"
      onClick={handleLogOut}>
        Log out
    </NavLink>

    <NavLink 
      className={styles.NavLink}
      to={`/profiles/${currentUser?.profile_id}`}
      >
      <img src={currentUser?.profile_image} alt="profile"/>
    </NavLink>
  </>;

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
          {currentUser && addRecipe}
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