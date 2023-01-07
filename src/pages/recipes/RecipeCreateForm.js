import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

function RecipeCreateForm() {

    const [errors, setErrors] = useState({});
  
  
    const textFields = (
      <div className="text-center">
        {/* Add your form fields here */}
  
      
      
        <Button
          onClick={() => {}}
        >
          cancel
        </Button>
        <Button type="submit">
          create
        </Button>
      </div>
    );

    return (
        <Form>
          <Row>
            <Col>
              <Container>
                <Form.Group className="text-center">
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset message="Click to add a picture of the dish" />
                    </Form.Label>
    
                </Form.Group>
                <div className="d-md-none">{textFields}</div>
              </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
              <Container>{textFields}</Container>
            </Col>
          </Row>
        </Form>
      );
    }
    
    export default RecipeCreateForm;