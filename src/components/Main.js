import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import RecipesList from "./RecipeListing/RecipesList";
import AddData from "./AddNew/AddData";
import InstructionsCard from "./RecipeListing/InstructionsCard";
import axios from "axios";

const Landing = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <About />
    </div>
  );
};

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    prepTime: "",
    servings: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    instructions: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3003/recipes")
      .then((response) => setRecipes(response.data));
  }, []);

  const valueChangeHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3010/recipes", newRecipe)
      .then(() => {
        return axios.get("http://localhost:3003/recipes");
      })
      .then((response) => setRecipes(response.data));
    e.target.reset();
  };

  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Landing} />
        <Route path="/recipes">
          <RecipesList recipes={recipes} />
        </Route>

        <Route path="/about" component={Info} />
        <Route path="/add">
          <AddData change={valueChangeHandler} submit={submitRecipe} />
        </Route>
        <Route path="/:id">
          <InstructionsCard />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
