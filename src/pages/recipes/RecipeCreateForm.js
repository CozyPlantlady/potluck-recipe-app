import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function RecipeCreateForm() {

    const [recipeData, setRecipeData] = useState({
        title: "",
        content: "",
        image: "",
        method: "",
        keywords: "",
      });

    const { title, content, image, method, keywords } = recipeData;

    const imageInput = useRef(null);
    const history = useHistory();

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setRecipeData({
                ...recipeData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', imageInput.current.files[0]);
        formData.append('method', method);
        formData.append('keywords', keywords);

        console.log(formData)
        console.log(imageInput.current.files[0])
        try {
            const { data } = await axiosReq.post('/recipes/', formData);
            console.log(data)
            history.push(`/recipes/${data.id}`);
        }catch(err){
            console.log(err)
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }
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
        {errors.title?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

        <Form.Group>
            <Form.Label>Recipe</Form.Label>
            <Form.Control
                as="textarea"
                rows={8}
                name="content"
                value={content}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.content?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

        <Form.Group>
            <Form.Label>Method</Form.Label>
            <Form.Control
                type="text"
                name="method"
                value={method}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.method?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

        <Form.Group>
            <Form.Label>Keywords</Form.Label>
            <Form.Control
                type="textarea"
                name="keywords"
                value={keywords}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.keywords?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}
        <Button
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button type="submit">
          send
        </Button>
      </div>
    );

    return (
        <Form
            onSubmit={handleSubmit}>
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
                        onChange={handleChangeImage}
                        ref={imageInput}/>
    
                </Form.Group>
                {errors?.image?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}
                <div className="d-md-none">{textFields}</div>
              </Container>
            </Col>
          </Row>
        </Form>
      );
    }
    
    export default RecipeCreateForm;