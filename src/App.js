import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import PropTypes from "prop-types";

const browserHistory = createBrowserHistory();
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
};

App.propTypes = {};

export default App;
