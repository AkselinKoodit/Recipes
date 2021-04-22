import React from "react";
import "./components.css";

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
              name="recipeName"
              id="recipename"
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
              required
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
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor="i2">Ingredient 2:</label>
            <input type="text" name="i2" id="i2" onChange={fill} />
          </div>
          <div>
            <label htmlFor="i3">Ingredient 3:</label>
            <input type="text" name="i3" id="i3" onChange={fill} />
          </div>
          <div>
            <label htmlFor="i4">Ingredient 4 (optional):</label>
            <input type="text" name="i4" id="i4" onChange={fill} />
          </div>
          <div>
            <label htmlFor="i5">Ingredient 5 (optional):</label>
            <input type="text" name="i5" id="i5" onChange={fill} />
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
          <input type="submit" value="Post the recipe" />
        </form>
      </div>
    </div>
  );
};

export default AddData;
