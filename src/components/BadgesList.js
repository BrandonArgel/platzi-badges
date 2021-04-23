import React, { Component } from "react";
import "./styles/BadgesList.css";
import logoTwitter from "../img/twitter.svg";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

export class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled Badge__container">
        {this.props.badges.map((badge) => {
          return (
            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
              <li key={badge.id}>
                <Gravatar
                  className="badge_avatar"
                  email={badge.email}
                  alt="Avatar"
                />
                <div className="Badge__container-data">
                  <p className="data">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="Badge__data">
                    <img
                      className="Badge__data-img"
                      src={logoTwitter}
                      alt="Twitter Logo"
                    />
                    <span className="twitter">@{badge.twitter}</span>
                  </p>
                  <p className="data">{badge.jobTitle}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
