import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Recipes from "./Recipes";

const Home = () => {
  return (
    <div>
      <Main />
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

const RouterMain = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Content} />
        <Route path="/about" component={Info} />
      </Switch>
    </div>
  );
};

export default RouterMain;
