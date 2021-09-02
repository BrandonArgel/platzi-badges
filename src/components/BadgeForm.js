import React, { Component } from "react";

export default class BadgeForm extends Component {
	/* handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
	} */

	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<div className="form-group">
					<label>First Name</label>
					<input
						className="form-control"
						type="text"
						name="firstName"
						autoFocus
						onChange={this.props.onChange}
						value={this.props.formValues.firstName}
					/>
				</div>
				<div className="form-group">
					<label>Last Name</label>
					<input
						className="form-control"
						type="text"
						name="lastName"
						onChange={this.props.onChange}
						value={this.props.formValues.lastName}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						type="email"
						name="email"
						onChange={this.props.onChange}
						value={this.props.formValues.email}
					/>
				</div>
				<div className="form-group">
					<label>Job Title</label>
					<input
						className="form-control"
						type="text"
						name="jobTitle"
						onChange={this.props.onChange}
						value={this.props.formValues.jobTitle}
					/>
				</div>
				<div className="form-group">
					<label>Twitter</label>
					<input
						className="form-control"
						type="text"
						name="twitter"
						onChange={this.props.onChange}
						value={this.props.formValues.twitter}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Save
				</button>

				{this.props.error && (
					<div class="mt-3 alert alert-danger" role="alert">
						<strong>Ups!!!</strong> {this.props.error.message}
					</div>
				)}
			</form>
		);
	}
}
