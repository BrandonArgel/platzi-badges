import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/home">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">PLatzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
