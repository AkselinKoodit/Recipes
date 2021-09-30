import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container className="instCard">
        <Row>
          <Col>
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
              {recipe.ingredients[6] && (
                <li>
                  {recipe.ingredients[6].quantity}
                  {" of "}
                  {recipe.ingredients[6].ingredientName}
                </li>
              )}
              {recipe.ingredients[7] && (
                <li>
                  {recipe.ingredients[7].quantity}
                  {" of "}
                  {recipe.ingredients[7].ingredientName}
                </li>
              )}
              {recipe.ingredients[8] && (
                <li>
                  {recipe.ingredients[8].quantity}
                  {" of "}
                  {recipe.ingredients[8].ingredientName}
                </li>
              )}
            </ul>
            <h4>Instructions:</h4>
            <p>{recipe.instructions}</p>
            <Button onClick={() => history.goBack()}>Back to recipes</Button>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={removed}
            >
              <Button size="sm" variant="danger" onClick={removeRecipe}>
                Remove this recipe
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <div className="imgFit">
              {recipe.image === "" ? (
                <Card.Img
                  src={`https://source.unsplash.com/1600x900/?${recipe.name}`}
                  alt={recipe.name}
                />
              ) : (
                <Card.Img src={`${recipe.image}`} alt={recipe.name} />
              )}
              {/* <Card.Img src={`${recipe.image}`} alt={recipe.name} /> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return <Container>{recipeInfo}</Container>;
};
export default InstructionsCard;
