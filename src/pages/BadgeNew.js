import React, { Component } from "react";
import header from "../img/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";
import Swal from "sweetalert2";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
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
      title: "Alto ahi!",
      text: `Te faltan campos por rellenar 🧐
         ${faltantes}`,
      icon: "error",
    });
  }

  alertaError() {
    Swal.fire({
      title: "Opps!",
      text: `Ha ocurrido algo inesperado 😅, vuelve a intentarlo nuevamente`,
      icon: "error",
    });

    // Controlar cuando sea un error 500 para que mande un mensaje que los server estan caidos o algo
  }

  alertaExitosa() {
    Swal.fire({
      title: "Creacion Exitosa!",
      text: "Muchas gracias por inscribirte en la conferencia 😊",
      icon: "success",
    }).then((result) => {
      if (result.value || !result.value) {
        this.props.history.push("/ReactJS/badges");
      }
    });
  }

  // Capturar el evento del envio de datos
  handleSubmit = async (e) => {
    e.preventDefault();
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
    } else {
      this.setState({
        loading: true,
        error: null,
      });

      try {
        await api.badges.create(this.state.form);
        this.setState({ loading: false });
        this.alertaExitosa();

        this.props.history.push("/ReactJS/badges");
      } catch (error) {
        this.setState({
          error: error,
          loading: false,
        });

        this.alertaError();
      }
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Hero"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://static.platzi.com/media/avatars/avatars/BrandArgel_b9b55b25-1391-4279-a81f-103150559ad8.jpg"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
