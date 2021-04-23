import React, { Component } from "react";
import AddData from "./AddData";
import Display from "./Display";
import "./components.css";
import Popup from "./Popup";

class NewRecipe extends Component {
  state = {
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
    showPopup: false,
    recipes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3003/recipes")
      .then((response) => response.json())
      .then((data) => this.setState({ recipes: data }));
  }

  fillHandler = (e) => {
    this.setState({
      inputdata: { ...this.state.inputdata, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  postDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputdata),
    };
    fetch("http://localhost:3003/recipes", requestOptions);
    alert("You recipe was posted", window.location.reload());
  };

  render() {
    return (
      <div className="newRecipePage">
        <AddData fill={this.fillHandler} submit={this.popupHandler} />
        <Display {...this.state.inputdata} />
        {this.state.showPopup && (
          <Popup {...this.state.inputdata} submit={this.postDataHandler} />
        )}
      </div>
    );
  }
}

export default NewRecipe;
