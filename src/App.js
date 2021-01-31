import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import { Route, Link } from "react-router-dom";
import { FooterContainer } from "./containers/Footer";

/** SOURCES
 * https://www.youtube.com/watch?v=fL8cFqhTHwA
 * https://www.youtube.com/watch?v=xMNhDf5-hvk&list=LL&index=1
 * https://www.youtube.com/watch?v=SdWJj1LSQPE&list=LL&index=1
 * https://www.youtube.com/watch?v=IYTBAQRBsw0
 * https://www.hiclipart.com/free-transparent-background-png-clipart-dawrh
 * https://seekvectorlogo.com/
 * https://www.youtube.com/watch?v=IYTBAQRBsw0
 *  */

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
