import React from "react";
import "../components.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ name, instructions, prepTime, ingredient1, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your recipe:</h1>
        <p>
          Name: <span>{name}</span>
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
