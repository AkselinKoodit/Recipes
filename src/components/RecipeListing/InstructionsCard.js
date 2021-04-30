import React from "react";
import "../components.css";

const closeHandler = () => {
  window.location.reload();
};

const InstructionsCard = ({
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  instructions,
}) => {
  return (
    <div className="overlay">
      <div className="popup">
        <p>Ingredients:</p>
        <ul className="list">
          <li>{ingredient1}</li>
          <li>{ingredient2}</li>
          <li>{ingredient3}</li>
          {ingredient4 && <li>{ingredient4}</li>}
          {ingredient5 && <li>{ingredient5}</li>}
        </ul>
        <p>
          Instructions: <span>{instructions}</span>
        </p>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};
export default InstructionsCard;
