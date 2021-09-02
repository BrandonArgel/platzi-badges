import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// components
import Layout from "../components/Layout";

// Pages
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

export default function App() {
	return (
		<HashRouter>
			<Layout>
				{/* este switch lo manda como un props a Layout */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</HashRouter>
	);
}
