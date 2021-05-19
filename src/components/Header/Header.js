import React from "react";
import "../components.css";

const Header = () => {
  return (
    <div>
      <a href="https://akselinkoodit.github.io/Recipes/">
        <h1 className="logo">
          <img src="https://img.icons8.com/ios-filled/50/000000/salt-bae.png" />
          {/* Icon from <a href="https://icons8.com/icon/41086/salt-bae">Salt Bae icon by Icons8</a> */}
        </h1>
      </a>
    </div>
  );
};

export default Header;
