import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Recipes from "./RecipesList";
import RecipesStateless from "./Recipecard";

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
      {/* <RecipesStateless recipes={this.state.recipes} /> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/recipes" component={Recipes} /> */}

        <Route path="/about" component={Info} />
      </Switch>
    </div>
  );
};

export default Main;
