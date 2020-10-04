import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const RouteWithLayout = (props) => {
  const {
    layout: Layout,
    component: Component,
    conditionShowLayout,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout conditionShowLayout={conditionShowLayout} {...matchProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {};
// RouteWithLayout.defaultProps = {
//   conditionShowLayout: null,
// };
export default RouteWithLayout;
