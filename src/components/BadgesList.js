import React, { Fragment } from "react";
import "./styles/BadgesList.css";
import logoTwitter from "../img/twitter.svg";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <Fragment>
        <div className="form-group">
          <label>Fliter Badges</label>
          <input
            className="form-control"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="form-group">
        <label>Fliter Badges</label>
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled Badge__container">
        {filteredBadges.map((badge) => {
          return (
            <Link
              key={badge.id}
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <li>
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
    </Fragment>
  );
}

export default BadgesList;
