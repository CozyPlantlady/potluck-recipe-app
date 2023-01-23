import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Recipe from "./Recipe";
import Asset from "../../components/Asset";
import { Form } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

function RecipesPage({message, filter=""}) {
    const [recipes, setRecipes] = useState({ results: [] });
    const { pathname } = useLocation();
    const [hasLoaded, setHasLoaded] = useState(false);

    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const { data } = await axiosReq.get(`/recipes/?${filter}search=${query}`);
                setRecipes(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);

            }
        };
        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchRecipes();
        }, 1000)
        return () => {
            clearTimeout(timer)
        }

    }, [filter, query, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control 
                type="text"
                placeholder="find a recipe"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
        </Form>
        {hasLoaded ? ( 
            <>
                {recipes.results.length ? (
                    <InfiniteScroll
                        children={
                            recipes.results.map((recipe) => (
                                <Recipe key={recipe.id} {...recipe} setRecipes={setRecipes} />
                            ))
                        }
                        dataLength={recipes.results.length}
                        loader={<Asset spinner />}
                        hasMore={!!recipes.next}
                        next={() => {}}
                        />
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