import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Recipe from "./Recipe";
import CommentForm from "../comments/CommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: recipe}] = await Promise.all([
                    axiosReq.get(`/recipes/${id}`),
                ]);
                setRecipe({results: [recipe]});
                console.log(recipe)
            } catch(err){
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Recipe {...recipe.results[0]} setRecipes={setRecipe} recipePage/>
        <Container>
          {currentUser ? (
          <CommentForm
            profile_id={currentUser.profile_id}
            post={id}
            setRecipe={setRecipe}
            setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
        </Container>
      </Col>
    </Row>
  );
}

export default RecipePage;