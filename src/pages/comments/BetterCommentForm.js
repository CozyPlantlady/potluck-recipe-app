import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { axiosRes } from "../../api/axiosDefaults";

function BetterCommentForm(props) {

    const { profile_id } = props;
    const { id } = useParams();

    const [commentData, setCommentData] = useState({
        content: "",
        comment_image: "",
        original_recipe: parseInt(`${id}`),
      });

    const {content, comment_image, original_recipe } = commentData;
    const imageInput = useRef(null);
    const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log(commentData)
    setCommentData({
        ...commentData,
        [event.target.id]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(comment_image);
        setCommentData({
            ...commentData,
            image: URL.createObjectURL(event.target.files[0]),
        });
        }
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('content', content);
    formData.append('original_recipe', original_recipe);
    formData.append('comment_image', comment_image);
    
    console.log(formData);
    console.log(imageInput.current.files[0]);

    try {
      const { data } = await axiosRes.post("/comments/", formData);
      console.log(data)
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401){
        setErrors(err.response?.data);
        }
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>

          </Link>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            onChange={handleChange}
            rows={2}
            id='content'
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="text-center">
        {comment_image ? (
            <>
            <figure>
                <Image src={comment_image}/>
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
                    htmlFor="comment-image-upload">
                        <Asset message="Click to add a picture of the dish" />
                    </Form.Label>
                    )}
                    
                    <Form.File
                        id="comment-image-upload"
                        accept="image/*"
                        onChange={handleChangeImage}
                        ref={imageInput}/>
    
                </Form.Group>
                {errors?.image?.map((message, idx) =>
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}
      <button
        className="btn d-block ml-auto"
        type="submit"
      >
        Send comment
      </button>
    </Form>
  );
};

export default BetterCommentForm;