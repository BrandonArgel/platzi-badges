import React, { Component } from "react";
import confLogo from "../img/badge-header.svg";
import Gravatar from './Gravatar'

import "./styles/Badge.css";

class Badge extends Component {
  render() {
    const { firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>{jobTitle}</h3>
          <div className="badge_twitter">@{twitter}</div>
        </div>
        <div className="badge_footer">#platzi</div>
      </div>
    );
  }
}

export default Badge;
