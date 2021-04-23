import React, { Component } from "react";
import Recipecard from "./Recipecard";
import SearchBox from "./SearchBox";
import "./components.css";

class RecipesList extends Component {
  state = {
    searchInput: "",
    inputdata: {
      name: "",
      prepTime: "",
      servings: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      instructions: "",
    },
    recipes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3003/recipes")
      .then((response) => response.json())
      .then((data) => this.setState({ recipes: data }));
  }

  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    const recipeFilter = this.state.recipes.filter((recipe) => {
      return recipe.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const recipeList = recipeFilter.map((recipe) => {
      return <Recipecard name={recipe.name} key={recipe.name} />;
    });

    return (
      <div>
        <h1>My recipes</h1>
        <SearchBox search={this.searchValueHandler} />
        <div className="recipelist">{recipeList}</div>
        <Recipecard recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipesList;
