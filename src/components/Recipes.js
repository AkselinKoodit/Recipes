import React, { Component } from "react";

class Recipes extends Component {
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
        <ul>
          {recipes.map((recipe) => {
            return (
              <li key={recipe.name}>
                {recipe.name}
                {recipe.prepTime}
                {recipe.ingredient1}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Recipes;
