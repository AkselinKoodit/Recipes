import React from "react";
import "./components.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({
  recipeName,
  image,
  prepTime,
  ingredient1,
  instructions,
  submit,
}) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your recipe:</h1>
        <p>
          Name: <span>{recipeName}</span>
        </p>
        <p>
          Image: <span>{image}</span>
        </p>
        <p>
          Preparation time: <span>{prepTime}</span>
        </p>
        <p>
          Ingredient: <span>{ingredient1}</span>
        </p>
        <p>
          Instructions: <span>{instructions}</span>
        </p>

        <button onClick={submit}>Post this recipe</button>
        <button onClick={closeHandler}>Nope, don't want to post it</button>
      </div>
    </div>
  );
};

export default Popup;
