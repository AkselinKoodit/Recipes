import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";

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
const Content = () => {
  return (
    <div>
      <Recipes />
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recipes" component={Content} />
        <Route path="/about" component={Info} />
      </Switch>
    </div>
  );
};

export default Main;
