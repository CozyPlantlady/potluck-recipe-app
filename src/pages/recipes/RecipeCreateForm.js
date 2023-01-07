import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";

function RecipeCreateForm() {

    const [recipeData, setRecipeData] = useState({
        title: "",
        recipe: "",
        image: "",
        method: "",
        keywords: "",
      });

    const { title, recipe, image, method, keywords } = recipeData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setRecipeData({
            ...recipeData,
            [event.target.name]:event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length){
            URL.revokeObjectURL(image);
            setRecipeData({
                ...recipeData,
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };
  
    const textFields = (
      <div className="text-center">
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Recipe</Form.Label>
            <Form.Control
                type="textarea"
                name="recipe"
                value={recipe}
                onChange={handleChange}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Method</Form.Label>
            <Form.Control
                type="text"
                name="method"
                value={method}
                onChange={handleChange}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Keywords</Form.Label>
            <Form.Control
                type="textarea"
                name="keywords"
                value={keywords}
                onChange={handleChange}
            />
        </Form.Group>

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
            
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
              <Container>{textFields}</Container>
            </Col>
            <Col>
              <Container>
                <Form.Group className="text-center">
                    {image ? (
                        <>
                            <figure>
                                <Image src={image}/>
                            </figure>
                            <div>
                                <Form.Label 
                                    className="btn"
                                    >
                                    Change to another picture
                                </Form.Label> 
                            </div>
                        </>
                    ) : (
                        <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload">
                        <Asset message="Click to add a picture of the dish" />
                    </Form.Label>
                    )}
                    
                    <Form.File
                        id="image-upload"
                        accept="image/*"
                        onChange={handleChangeImage}/>
    
                </Form.Group>
                <div className="d-md-none">{textFields}</div>
              </Container>
            </Col>
          </Row>
        </Form>
      );
    }
    
    export default RecipeCreateForm;