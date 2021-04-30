import React from "react";
import "../components.css";

const AddData = ({ submit, fill }) => {
  return (
    <div>
      <h1>Add a new recipe:</h1>
      <div className="form">
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Recipe name:</label>
            <input
              type="text"
              placeholder="example"
              name="name"
              id="name"
              onChange={fill}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image url (optional):</label>
            <input
              type="text"
              placeholder="https://exampleimages.com/example.png"
              name="image"
              id="image"
              onChange={fill}
            />
          </div>

          <div>
            <label htmlFor="prepTime">Preparation time (minutes):</label>
            <input
              type="number"
              placeholder="45"
              name="prepTime"
              id="prepTime"
              max="999"
              min="0"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="servings">How many servings:</label>
            <input
              type="number"
              name="servings"
              placeholder="4"
              id="servings"
              max="99"
              min="0"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="ingredient1">Ingredient 1:</label>
            <input
              type="text"
              name="ingredient1"
              placeholder="gabbage"
              id="ingredient1"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="ingredient2">Ingredient 2:</label>
            <input
              type="text"
              name="ingredient2"
              id="ingredient2"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="ingredient3">Ingredient 3:</label>
            <input
              type="text"
              name="ingredient3"
              id="ingredient3"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="ingredient4">Ingredient 4 (optional):</label>
            <input
              type="text"
              name="ingredient4"
              id="ingredient4"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="ingredient5">Ingredient 5 (optional):</label>
            <input
              type="text"
              name="ingredient5"
              id="ingredient5"
              onChange={fill}
            />
          </div>
          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              name="instructions"
              placeholder="mix everything and cook it"
              id="instructions"
              onChange={fill}
              required
            ></textarea>
          </div>
          <input type="submit" value="Next" />
        </form>
      </div>
    </div>
  );
};

export default AddData;
