import React from "react";
import "./components.css";

const Recipecard = ({ recipes }) => {
  return (
    <div className="recipepage">
      <ul className="recipelistlist">
        {recipes.map((recipe) => {
          return (
            <li key={recipe.name} className="recipecard">
              <h3>{recipe.name}</h3>
              <img
                src={`https://source.unsplash.com/1600x900/?${recipe.name}`}
                alt={recipe.name}
              />
              <div>Prep time: {recipe.prepTime}</div>
              <div>
                Ingredients:{" "}
                {recipe.ingredients[0] +
                  ", " +
                  recipe.ingredients[1] +
                  " and " +
                  recipe.ingredients[2]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipecard;
