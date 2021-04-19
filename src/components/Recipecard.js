import React from "react";
import "./components.css";

const Recipecard = ({ recipes }) => {
  return (
    <div className="recipepage">
      <h1>My json data</h1>
      <ul className="recipelistlist">
        {recipes.map((recipe) => {
          return (
            <li key={recipe.name} className="recipecard">
              {recipe.name}
              {recipe.prepTime}
              {recipe.ingredients[0]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipecard;
