import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import herovideo from "../../assets/video.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../components.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Jumbotron fluid>
          <video className="bgVideo" muted autoPlay loop>
            <source src={herovideo} type="video/mp4" />
            {/* Video by Pressmaster from Pexels */}
          </video>
        </Jumbotron>
      </Row>
      <h1>Akseli's special recipes</h1>
      <div>
        <p>
          Welcome to my recipes page! Here I'll bring you the finest, most
          delicious vegetarian dishes to your screen. Using React.js and{" "}
          <em className="strikethrough">css</em> React.bootstrap libraries I'll
          make this a thing of beauty!
        </p>
        <p>
          My girlfriend is vegetarian which means I'm vegetarian. I love to cook
          but hadn't had a lot of knowledge on vegetarian recipes before. This
          page is made for others like me who want to cut meat off the menu but
          are struggling to find truly tasty and filling vegetarian recipes.
          Here I've listed the best vegetarian recipes that I've learned.
        </p>
        <p>
          Feel free to add your own{" "}
          <a href="https://akselinkoodit.github.io/Recipes/#/add"> here!</a>
        </p>
      </div>
    </Container>
  );
};

export default Home;
