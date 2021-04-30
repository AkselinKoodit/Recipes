import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div className="header">
        <Header />
        <Nav />
      </div>
      <hr></hr>
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
