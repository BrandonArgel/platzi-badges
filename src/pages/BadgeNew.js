import React, { Component } from "react";
import Swal from "sweetalert2";
import md5 from "md5";

// files
import "./style/BadgeNew.css";
import header from "../images/platziconf-logo.svg";

// components
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";

// api
import api from "../api";

export default class BadgeNew extends Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
			avatarUrl: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	alertaFaltanDatos(faltantes) {
		Swal.fire({
			customClass: {
				title: "swal-title",
				confirmButton: "swal-button-text",
				htmlContainer: "swal-text",
			},
			title: "Alto ahi!",
			text: `Te faltan campos por rellenar 🧐
         ${faltantes}`,
			icon: "error",
			background: "#000000",
		});
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
	}

	alertSuccess() {
		Swal.fire({
			customClass: {
				title: "swal-title",
				confirmButton: "swal-button-text",
				htmlContainer: "swal-text",
			},
			title: "Successfully created!",
			text: "Thank you very much for registering for the conference 😊",
			icon: "success",
			background: "#000000",
		}).then((result) => {
			if (result.value || !result.value) {
				this.props.history.push("/badges");
			}
		});
	}

	// Capturar el evento del envio de datos
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });
		let datosFaltantes = [];

		for (const propiedad in this.state.form) {
			if (this.state.form.hasOwnProperty(propiedad)) {
				const valor = this.state.form[propiedad];
				if (valor === "") {
					datosFaltantes.push(propiedad);
				}
			}
		}

		if (
			this.state.form.firstName === "" ||
			this.state.form.lastName === "" ||
			this.state.form.email === "" ||
			this.state.form.jobTitle === "" ||
			this.state.form.twitter === ""
		) {
			let camposFaltantes = datosFaltantes.join(`, `);
			this.alertaFaltanDatos(camposFaltantes);
			this.setState({ loading: false });
		} else {
			this.setState({
				loading: true,
				error: null,
			});

			try {
				// añadimos un valor al avatarUrl
				this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${md5(
					this.state.form.email
				)}?d=identicon`;
				await api.badges.create(this.state.form);
				this.setState({ loading: false });
				this.alertSuccess();

				this.props.history.push("/badges");
			} catch (error) {
				this.setState({
					error: error,
					loading: false,
				});

				this.alertError();
			}
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}

		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<div className="container-fluid d-flex justify-content-center">
						<img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
					</div>
				</div>

				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 col-md-7">
							<Badge
								firstName={this.state.form.firstName || "FirstName"}
								lastName={this.state.form.lastName || "LastName"}
								twitter={this.state.form.twitter || "my_nickname"}
								jobTitle={this.state.form.jobTitle || "Job Title"}
								email={this.state.form.email || "my_email@gmail.com"}
								// avatar={this.state.form.email}
								// avatar='https://avatars1.githubusercontent.com/u/55221373?s=460&u=a2c9a5fb3c276bf93773dbe3a1bf71d2e9c3525b&v=4'
							/>
						</div>

						<div className="col-sm-12 col-md-5 mt-5 mt-md-0 mb-5 new-badge__container">
							<h2>New Attendant</h2>
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit={this.handleSubmit}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
