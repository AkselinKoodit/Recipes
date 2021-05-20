import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const Recipecard = (props) => {
  let info = undefined;

  if (!props) {
    info = <Spinner animation="border" variant="primary" />;
  } else {
    info = (
      <Card key={props.id} className="recipecard">
        <Card.Title>{props.name}</Card.Title>
        {props.image == "" ? (
          <Card.Img
            src={`https://source.unsplash.com/1600x900/?${props.name}`}
            alt={props.name}
          />
        ) : (
          <Card.Img src={`${props.image}`} alt={props.name} />
        )}
        <Card.Text>Preparation time: {props.prepTime} min</Card.Text>
        <Card.Text>Servings: {props.servings}</Card.Text>
        <Button>
          <Link to={`/allRecipes/${props.link}`}>See instructions</Link>
        </Button>
      </Card>
    );
  }
  return (
    <div>{info}</div>

    // <Card key={props.id} className="recipecard">
    //   <Card.Title>{props.name}</Card.Title>
    //   {props.image == "" ? (
    //     <Card.Img
    //       src={`https://source.unsplash.com/1600x900/?${props.name}`}
    //       alt={props.name}
    //     />
    //   ) : (
    //     <Card.Img src={`${props.image}`} alt={props.name} />
    //   )}
    //   <Card.Text>Preparation time: {props.prepTime} min</Card.Text>
    //   <Card.Text>Servings: {props.servings}</Card.Text>
    //   <Button>
    //     <Link to={`/allRecipes/${props.link}`}>See instructions</Link>
    //   </Button>
    // </Card>
  );
};

export default Recipecard;
