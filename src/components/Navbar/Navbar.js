import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fas fa-graduation-cap"></i> learn, practice and excel
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <Link className="nav-links underline" to="/" a href="/">
            Home
          </Link>

          <Link className="nav-links underline" to="/products">
            Products
          </Link>
          <Link className="nav-links underline" to="/about">
            About
          </Link>
        </ul>
        {/* <Button /> */}
      </nav>
    );
  }
}

export default Navbar;
