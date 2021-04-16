import React, { Component } from "react";
import logo from "../img/logo.svg";
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">PLatzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
