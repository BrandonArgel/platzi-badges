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

	alertError() {
		Swal.fire({
			customClass: {
				title: "swal-title",
				confirmButton: "swal-button-text",
				htmlContainer: "swal-text",
			},
			title: "Opps!",
			text: "Something unexpected happened 😅, please try again",
			icon: "error",
			background: "#000000",
		});

		// Controlar cuando sea un error 500 para que mande un mensaje que los server estan caidos o algo
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
		this.setState({ loading: true, error: null });

		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.setState({ loading: false });
		} catch (error) {
			console.log(error);
			this.setState({ loading: false, error: error });
		}
		this.alertSuccess();
		this.props.history.push("/badges");
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
