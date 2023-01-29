import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { axiosRes } from "../../api/axiosDefaults";

function CommentForm(props) {
  const { recipe, setRecipe, setComments, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        recipe,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setRecipe((prevRecipe) => ({
        results: [
          {
            ...prevRecipe.results[0]}
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
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
          />
        </InputGroup>
      </Form.Group>
      <button
        className="btn d-block ml-auto"
        disabled={!content.trim()}
        type="submit"
      >
        Send comment
      </button>
    </Form>
  );
}

export default CommentForm;