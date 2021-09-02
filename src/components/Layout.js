import React, { Fragment } from "react";

// component
import Navbar from "./Navbar";

export default function Layout(props) {
	return (
		<Fragment>
			<Navbar />
			{props.children}
		</Fragment>
	);
}
