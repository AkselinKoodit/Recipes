import React from "react";
import "./components.css";

const Recipecard = ({ recipes }) => {
  return (
    <div className="recipepage">
      <ul className="recipelistlist">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.name} className="recipecard">
              <h3>{recipe.name}</h3>
              <div className="recipeImg">
                <img
                  src={`https://source.unsplash.com/1600x900/?${recipe.name}`}
                  alt={recipe.name}
                />
              </div>
              <p>Preparation time: {recipe.prepTime}</p>
              <hr></hr>
              <p>Servings: {recipe.servings}</p>
              <hr></hr>
              <p>Ingredients:</p>
              <ul className="list">
                <li>{recipe.ingredient1}</li>
                <li>{recipe.ingredient2}</li>
                <li>{recipe.ingredient3}</li>
                {recipe.ingredient4 && <li>{recipe.ingredient4}</li>}
                {recipe.ingredient5 && <li>{recipe.ingredient5}</li>}
              </ul>
              <hr></hr>
              <div>Instructions: {recipe.instructions}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipecard;
