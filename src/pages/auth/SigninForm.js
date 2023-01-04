import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
        const [signInData, setSignInData] = useState({
            username: "",
            password: "",
        });
    
        const { username, password } = signInData;
    
        const [errors, setErrors] = useState({});
    
        const history = useHistory();
    
        const handleChange = (event) => {
            setSignInData({
                ...signInData,
                [event.target.name]: event.target.value
            });
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                await axios.post('/dj-rest-auth/login/', signInData);
                history.push("/");
            } catch(err){
                setErrors(err.response?.data)
            }
        };
    return (
        <Row>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container>
                <Link to="/">
                Don't have an account? <span>Sign up!</span>
                </Link>
            </Container>
            <Container className="p-4">
            
            <h1>Log in</h1>

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

                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

                <Button variant="primary" type="submit">
                    Sign in
                </Button>

            </Form>
            </Container>
        </Col>
        <Col
            md={6}
            className="my-auto d-none d-md-block p-2"
        ><p>filler text or image</p>
        </Col>
        </Row>
    );
    };

    export default SignInForm;