import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import RecipesList from "./RecipeListing/RecipesList";
import AddData from "./AddNew/AddData";
import InstructionsCard from "./RecipeListing/InstructionsCard";
import Nav from "react-bootstrap/Nav";
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
    <Nav>
      <About />
    </Nav>
  );
};

const Recipes = () => {
  return (
    <Nav>
      <RecipesList />
    </Nav>
  );
};

const Main = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/Recipes" exact component={Landing} /> */}
        <Route path="/" exact component={Landing} />
        <Route path="/allRecipes" component={Recipes}>
          <RecipesList />
        </Route>
        <Route path="/about" component={Info} />
        <Route path="/add">
          <div className="newRecipePage">
            <AddData />
          </div>
        </Route>
        <Route path="/allRecipes/:id">
          <InstructionsCard />
          <p>Recipe here</p>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Main;
