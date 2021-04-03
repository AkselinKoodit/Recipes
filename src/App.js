import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterMain from "./components/RouterMain";
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
      <div className="main">
        <RouterMain />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
