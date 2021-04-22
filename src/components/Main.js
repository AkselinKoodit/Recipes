import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import RecipesList from "./RecipesList";
import NewRecipe from "./NewRecipe";

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
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipes" component={RecipesList} />
        <Route path="/about" component={Info} />
        <Route path="/add" component={NewRecipe} />
      </Switch>
    </div>
  );
};

export default Main;
