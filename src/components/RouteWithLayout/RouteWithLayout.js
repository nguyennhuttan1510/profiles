import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout {...matchProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {};

export default RouteWithLayout;
