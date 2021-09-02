import React from "react";
import { Link } from "react-router-dom";

// static
import "./style/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

// components
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

export default function BadgeDetail(props) {
	const badge = props.badge;
	return (
		<div>
			<div className="BadgeDetails__hero">
				<div className="container">
					<div className="row">
						<div className="col">
							<img src={confLogo} alt="Logo de la Conferencia" />
						</div>
						<div className="col BadgeDetails__hero-attendant-name">
							<h1>
								{badge.firstName} {badge.lastName}
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="container mb-4">
				<div className="row">
					<div className="col-8">
						<Badge
							firstName={badge.firstName}
							lastName={badge.lastName}
							email={badge.email}
							twitter={badge.twitter}
							jobTitle={badge.jobTitle}
						/>
					</div>
					<div className="col-4 actions__container">
						<h2>Actions</h2>
						<div>
							<div className="mb-3">
								<Link className="btn btn-info button-blue" to={`/badges/${badge.id}/edit`}>
									Edit
								</Link>
							</div>

							<div>
								<button onClick={props.onOpenModal} className="btn btn-danger button-width">
									Delete
								</button>

								<DeleteBadgeModal
									isOpen={props.modalIsOpen}
									onClose={props.onCloseModal}
									onDeleteBadge={props.onDeleteBadge}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
