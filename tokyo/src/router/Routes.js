import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '');

const Routes = () => {
  return (
    <>
      <Router basename={basename}>
        <Switch>
          <Route exact path="/" component={HomeLight} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
