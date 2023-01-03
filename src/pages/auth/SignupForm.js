import React from "react";
import { Link } from "react-router-dom";
import logo from '/workspace/potluck-recipe-app/src/assets/logo.png'

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
      <Row>
        <Col className="my-auto py-2 p-md-2" md={6}>
          <Container className="p-4">
            <h1>sign up</h1>
  
              {/* add your form here */}
  
          </Container>
          <Container className="mt-3">
            <Link to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
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