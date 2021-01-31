import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import { Route } from "react-router-dom";
import { FooterContainer } from "./containers/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/about" component={About} />
      <FooterContainer />
    </div>
  );
}

export default App;
