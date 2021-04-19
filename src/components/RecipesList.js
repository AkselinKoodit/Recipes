import React, { Component } from "react";
import Recipecard from "./Recipecard";

class RecipesList extends Component {
  state = {
    prepTime: "",
    ingredient1: "",
    ingredient2: "",
    ingredien3: "",
    instructions: "",
    recipes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3003/recipes")
      .then((response) => response.json())
      .then((data) => this.setState({ recipes: data }));
  }

  render() {
    return (
      <div>
        <Recipecard recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipesList;
