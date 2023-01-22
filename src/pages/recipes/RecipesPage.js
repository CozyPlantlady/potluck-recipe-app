import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Recipe from "./Recipe";
import Asset from "../../components/Asset";

function RecipesPage({message, filter=""}) {
    const [recipes, setRecipes] = useState({ results: [] });
    const { pathname } = useLocation();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const { data } = await axiosReq.get(`/recipes/?${filter}`)
                setRecipes(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);

            }
        };
        setHasLoaded(false);
        fetchRecipes();
    }, [filter, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? ( 
            <>
                {recipes.results.length ? (
                    recipes.results.map((recipe) => (
                        <Recipe key={recipe.id} {...recipe} setRecipes={setRecipes} />
                    ))
                ) : (
                        <Container>
                            <Asset message={message} />
                        </Container>
                )}
            </>
        ) : (
            <Container >
                <Asset spinner />
            </Container>
        )}
      </Col>
    </Row>
  );
}

export default RecipesPage;