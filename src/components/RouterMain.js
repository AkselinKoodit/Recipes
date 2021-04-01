import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Main />
    </div>
  );
};
const Recipes = () => {
  return (
    <div>
      <h1>Recipes will be here</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <p>
        This is a study project for React course at Helsinki Business College
      </p>
    </div>
  );
};

const RouterMain = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default RouterMain;
