import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fakeAuth } from "./FakeAuth";
const PrivateRoutes = (props) => {
  const {
    layout: Layout,
    component: Component,
    conditionShowLayout,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={({ location }, matchProps) =>
        fakeAuth.isAuthenticated ? (
          <Layout conditionShowLayout={conditionShowLayout} {...matchProps}>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
