import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from '../../assets/logo.png';
import styles from '../../components/styles/signUpForm.module.css';

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            history.push('/signin')
        } catch(err){
            setErrors(err.response?.data)
        }
    };

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
  
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={password1}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Repeat password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {errors.non_field_errors?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

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