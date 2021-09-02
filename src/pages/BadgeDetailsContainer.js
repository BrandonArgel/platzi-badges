import React, { Component } from "react";
import Swal from "sweetalert2";

// api
import api from "../api";

// components
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

export default class BadgeDetailsContainer extends Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		modalIsOpen: false,
	};

	componentDidMount() {
		this.fetchData();
	}

	alertSuccess() {
		Swal.fire({
			customClass: {
				title: "swal-title",
				confirmButton: "swal-button-text",
				htmlContainer: "swal-text",
			},
			title: "Successfully removed!",
			text: "Your badge has been removed",
			icon: "success",
			background: "#000000",
		});
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleOpenModal = (e) => {
		this.setState({ modalIsOpen: true });
	};
	handleCloseModal = (e) => {
		this.setState({ modalIsOpen: false });
	};
	handleDeleteBadge = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });
		// Fix error unexpected token D in JSON at position 0
		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.setState({ loading: false, modalIsOpen: false });
		} catch (error) {
			this.setState({ loading: false });
			// this.setState({ error: error });
		}
		this.props.history.push("/badges");
		this.alertSuccess();
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return (
			<BadgeDetails
				badge={this.state.data}
				onCloseModal={this.handleCloseModal}
				onOpenModal={this.handleOpenModal}
				onDeleteBadge={this.handleDeleteBadge}
				modalIsOpen={this.state.modalIsOpen}
			/>
		);
	}
}
