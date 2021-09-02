import React, { Component } from "react";
import { Link } from "react-router-dom";

// statics
import twitter from "../images/twitter.png";
import "./styles/BadgesList.css";

// clase para un badge
class BadgesListItem extends Component {
	render() {
		return (
			<React.Fragment>
				<img src={this.props.badge.avatarUrl} alt="Avatar" className="list-img" />
				<div className="list-info">
					<h5>
						{this.props.badge.firstName} {this.props.badge.lastName}
					</h5>
					<div className="info-twitter">
						<img src={twitter} alt="Twitter Icon" /> <span>@{this.props.badge.twitter}</span>
					</div>
					<p>{this.props.badge.jobTitle}</p>
				</div>
			</React.Fragment>
		);
	}
}

function useSearchBadges(badgesList) {
	const [query, setQuery] = React.useState("");
	const [filterBadges, setFilterBadges] = React.useState(badgesList);

	// with Memo --hooks--
	React.useMemo(() => {
		const result = badgesList.filter((badge) => {
			return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
		});

		setFilterBadges(result);
	}, [badgesList, query]);

	return { query, setQuery, filterBadges };
}

export default function BadgesList(props) {
	const badgesList = props.badges.reverse();

	const { query, setQuery, filterBadges } = useSearchBadges(badgesList);

	/* const filterBadges = badgesList.filter((badge) => {
		return `${badge.firstName} ${badge.lastName}`
			.toLowerCase()
			.includes(query.toLowerCase())
	}) */

	if (filterBadges.length === 0) {
		return (
			<div className="badges-list__container">
				<div className="form-group">
					<label htmlFor="search">Filter Badges</label>
					<input
						type="text"
						className="form-control"
						autoFocus
						id="search"
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
			</div>
		);
	}

	return (
		<div className="BadgesList">
			<div className="form-group">
				<label htmlFor="search">Filter Badges</label>
				<input
					type="text"
					className="form-control"
					autoFocus
					id="search"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>
			<ul className="list-unstyled">
				{filterBadges.map((badge) => {
					return (
						<li key={badge.id}>
							<Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
								<div className="badge-list">
									<BadgesListItem badge={badge} />
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
