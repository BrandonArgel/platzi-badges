import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/ReactJS/" component={Home} />
          <Route exact path="/ReactJS/badges" component={Badges} />
          <Route exact path="/ReactJS/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/ReactJS/badges/:badgeId"
            component={BadgeDetails}
          />
          <Route
            exact
            path="/ReactJS/badges/:badgeId/edit"
            component={BadgeEdit}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;