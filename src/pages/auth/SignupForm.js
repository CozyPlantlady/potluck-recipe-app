import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import styles from '../../components/styles/signUpForm.module.css';

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
      <Row>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container className={`${styles.link} mt-3`}>
                <Link to="/signin">
                Already have an account? <span>Sign in</span>
                </Link>
            </Container>
          <Container className="p-4">
            
            <h1>Sign up</h1>
  
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" />
                </Form.Group>

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password1" />
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" name="password2" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Container>

          
        </Col>
        <Col
          md={6}
          className="my-auto d-none d-md-block p-2"
        >
          <Image
            src={logo}
          />
        </Col>
      </Row>
    );
  };
  
  export default SignUpForm;