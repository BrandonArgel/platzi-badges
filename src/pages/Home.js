import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import conf from "../img/platziconf-logo.svg";
import astronauts from "../img/astronauts.svg";

function Home() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="home__container">
          <img src={conf} alt="Conf Logo" />
          <h1 className="title">Print your badges</h1>
          <p>The easiest way to manage your conference</p>
          <div className="Start__button">
            <Link className="btn btn-primary" to="/ReactJS/badges">
              Start Now
            </Link>
          </div>
        </div>
        <div>
          <img className="astronauts" src={astronauts} alt="Astronauts" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
