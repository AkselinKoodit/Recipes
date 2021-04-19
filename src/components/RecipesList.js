import React, { Component } from "react";
import Recipecard from "./Recipecard";
import SearchBox from "./SearchBox";

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
  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    // const recipeFilter = this.state.recipes.filter((recipe) => {
    //   return recipe.name
    //     .toLowerCase()
    //     .includes(this.state.searchInput.toLowerCase());
    // });
    // const recipesList = recipeFilter.map((recipe) => {
    //   return <Recipecard name={recipe.name} />;
    // });

    return (
      <div>
        <SearchBox search={this.searchValueHandler} />

        <Recipecard recipes={this.state.recipes} />
      </div>
    );
    return <div></div>;
  }
}

export default RecipesList;
