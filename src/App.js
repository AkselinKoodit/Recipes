import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Nav";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const App = () => {
  return (
    <Container className="bg">
      <Router>
        <Row className="header">
          <Header />
          <Navigation />
        </Row>
        <Main />
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
