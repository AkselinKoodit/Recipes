import React, { useState, useEffect } from "react";
import Recipecard from "./Recipecard";
import SearchBox from "./SearchBox";
import { Switch, Route } from "react-router-dom";
import InstructionsCard from "./InstructionsCard";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import axios from "axios";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let [loaded, setLoaded] = useState(false);

  const searchValueHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axios
      //.get("http://localhost:3003/recipes")
      .get("https://gentle-plateau-95526.herokuapp.com/recipe/all")
      .then((res) => setRecipes(res.data))
      .then(setLoaded(true));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const recipesList = filteredRecipes.map((recipe) => {
    return (
      <Container fluid>
        <Recipecard
          key={recipe.id}
          name={recipe.name}
          image={recipe.image}
          servings={recipe.servings}
          prepTime={recipe.prepTime}
          ingredient1={recipe.ingredient1}
          ingredient2={recipe.ingredient2}
          ingredient3={recipe.ingredient3}
          ingredient4={recipe.ingredient4}
          ingredient5={recipe.ingredient5}
          instructions={recipe.instructions}
          link={recipe.id}
        />
      </Container>
    );
  });

  let message = "";
  if (!loaded) {
    message = (
      <div>
        Loading... <Spinner animation="border" variant="primary" />
      </div>
    );
  } else {
    message = <div className="recipelistlist">{recipesList}</div>;
  }

  return (
    <Container className="paddedBottom">
      {/* <Row></Row> */}
      <Switch>
        <Route path="/:recipes" exact>
          <div className="card2">
            <h1>Recipe page</h1>
            <SearchBox search={searchValueHandler} />
          </div>
          <div>{message}</div>
        </Route>
        <Route path="/allRecipes/:id">
          <InstructionsCard />
        </Route>
      </Switch>
    </Container>
  );
};
export default RecipeList;
