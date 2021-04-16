import React, { Component } from "react";
import "./styles/BadgesList.css";
import logoTwitter from "../img/twitter.svg";

export class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled Badge__container">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <img src={badge.avatarUrl} alt="Avatar" />
              <div className="Badge__container-data">
                <p className="data">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="Badge__data">
                  <img className="Badge__data-img" src={logoTwitter} alt="Twitter Logo" />@{badge.twitter}
                </p>
                <p className="data">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
