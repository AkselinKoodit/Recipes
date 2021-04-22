import React from "react";

const Display = ({
  recipeName,
  image,
  prepTime,
  ingredient1,
  instructions,
}) => {
  return (
    <div className="view">
      <div className="notepad">
        <h4>Check your input:</h4>
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
      </div>
    </div>
  );
};

export default Display;
