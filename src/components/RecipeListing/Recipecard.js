import React from "react";
import "../components.css";
import { Link } from "react-router-dom";

const Recipecard = (props) => {
  return (
    <div>
      <div key={props.id} className="recipecard">
        <h3>{props.name}</h3>
        <div className="recipeImg">
          <img
            src={`https://source.unsplash.com/1600x900/?${props.name}`}
            alt={props.name}
          />
        </div>
        <p>Preparation time: {props.prepTime}</p>
        <hr></hr>
        <p>Servings: {props.servings}</p>
        <Link to={`/${props.link}`}>See instructions</Link>
      </div>
    </div>
  );
};

export default Recipecard;
