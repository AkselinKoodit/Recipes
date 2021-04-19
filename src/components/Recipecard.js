import React from "react";

const RecipeCard = ({ recipes }) => {
  return (
    <div className="recipecard">
      <h1>My json data</h1>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.name}>
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

export default RecipeCard;
