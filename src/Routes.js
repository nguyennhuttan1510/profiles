import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { HomePage } from "./views";
import { Main } from "./layouts";
import { RouteWithLayout } from "./components";
const Routes = (props) => {
  return (
    <Switch>
      <RouteWithLayout component={HomePage} exact layout={Main} path="/" />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
