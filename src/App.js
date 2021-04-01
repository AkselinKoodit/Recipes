import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterMain from "./components/RouterMain";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <RouterMain />
      <Footer />
    </Router>
  );
};

export default App;
