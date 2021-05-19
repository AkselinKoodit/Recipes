import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const InstructionsCard = () => {
  const [recipe, setRecipe] = useState();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!recipe) {
      axios
        .get("https://gentle-plateau-95526.herokuapp.com/recipe/find/" + id)
        .then((response) => setRecipe(response.data));
    }
  });

  const removeRecipe = () => {
    axios.delete(
      "https://gentle-plateau-95526.herokuapp.com/recipe/remove/" + id
    );
    console.log("Trying to remove a recipe..." + id);
  };
  const removed = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Recipe removed</Popover.Title>
      <Popover.Content>
        The recipe was removed from database.Refresh the recipes page to see the
        change.
      </Popover.Content>
    </Popover>
  );

  let recipeInfo = undefined;

  if (!recipe) {
    recipeInfo = <Spinner animation="border" variant="primary" />;
  }
  if (recipe) {
    recipeInfo = (
      <>
        <h4>Ingredients:</h4>
        <ul className="list">
          <li>
            {recipe.ingredients[0].quantity}
            {" of "}
            {recipe.ingredients[0].ingredientName}
          </li>
          {recipe.ingredients[1] && (
            <li>
              {recipe.ingredients[1].quantity}
              {" of "}
              {recipe.ingredients[1].ingredientName}
            </li>
          )}
          {recipe.ingredients[2] && (
            <li>
              {recipe.ingredients[2].quantity}
              {" of "}
              {recipe.ingredients[2].ingredientName}
            </li>
          )}
          {recipe.ingredients[3] && (
            <li>
              {recipe.ingredients[3].quantity}
              {" of "}
              {recipe.ingredients[3].ingredientName}
            </li>
          )}
          {recipe.ingredients[4] && (
            <li>
              {recipe.ingredients[4].quantity}
              {" of "}
              {recipe.ingredients[4].ingredientName}
            </li>
          )}
          {recipe.ingredients[5] && (
            <li>
              {recipe.ingredients[5].quantity}
              {" of "}
              {recipe.ingredients[5].ingredientName}
            </li>
          )}
        </ul>
        <h4>Instructions:</h4>
        <p>{recipe.instructions}</p>
        <Button onClick={() => history.goBack()}>Back to recipes</Button>
        <OverlayTrigger trigger="click" placement="bottom" overlay={removed}>
          <Button size="sm" variant="danger" onClick={removeRecipe}>
            Remove this recipe
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return <div>{recipeInfo}</div>;
};
export default InstructionsCard;
