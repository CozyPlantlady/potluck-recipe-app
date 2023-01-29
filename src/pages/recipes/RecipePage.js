import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Recipe from "./Recipe";
import BetterCommentForm from "../comments/BetterCommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";


function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: recipe}, {data: comments}] = await Promise.all([
                    axiosReq.get(`/recipes/${id}`),
                    axiosReq.get(`/comments/?recipe=${id}`)
                ]);
                setRecipe({results: [recipe]});
                setComments(comments);
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
          <BetterCommentForm
            profile_id={currentUser.profile_id}
            recipe={id}
            setRecipe={setRecipe}
            setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            comments.results.map(comment => (
              <Comment key={comments.id} {...comment} />
            ))
          ) : currentUser ? (
            <span>Current user, you should comment</span>
          ) : (
            <span>Log in to start commenting</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default RecipePage;