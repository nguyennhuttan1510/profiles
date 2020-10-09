import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { BusinessPage, HomePage } from "./views";
import { Main } from "./layouts";
import { RouteWithLayout, PrivateRoutes } from "./components";
import {
  ContactMe,
  MyBestSetting,
  IndexSetting,
  PriceSetting,
  ServiceSetting,
  ServiceManagement,
} from "./views/ProfileManagement";
import TimeLine from "./views/ProfileManagement/TimeLine/TimeLine";
import { ConfirmService, LoginManager } from "./views/components";

const Routes = (props) => {
  const conditionShowLayout = {
    noBannerHeader: true,
    showMenuForManager: true,
  };
  const conditionShowLogin = {
    noBannerHeader: true,
    showMenuForManager: false,
  };
  return (
    <Switch>
      {/* Login */}
      <RouteWithLayout
        component={LoginManager}
        exact
        layout={Main}
        path="/login"
        conditionShowLayout={conditionShowLogin}
      />
      {/* Viewers */}
      <RouteWithLayout
        component={HomePage}
        exact
        layout={Main}
        path="/profile"
      />
      <RouteWithLayout
        component={BusinessPage}
        exact
        layout={Main}
        path="/services"
      />
      <RouteWithLayout
        component={ConfirmService}
        exact
        layout={Main}
        path="/confirm-service/:slug/:id"
      />
      {/* moderator */}
      <PrivateRoutes
        component={ServiceManagement}
        exact
        layout={Main}
        path="/service-management"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={ContactMe}
        exact
        layout={Main}
        path="/contact-management"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={MyBestSetting}
        exact
        layout={Main}
        path="/setting-management/mybest"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={IndexSetting}
        exact
        layout={Main}
        path="/setting-management/index"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={TimeLine}
        exact
        layout={Main}
        path="/setting-management/timeline"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={PriceSetting}
        exact
        layout={Main}
        path="/setting-management/pricetable"
        conditionShowLayout={conditionShowLayout}
      />
      <RouteWithLayout
        component={ServiceSetting}
        exact
        layout={Main}
        path="/setting-management/services"
        conditionShowLayout={conditionShowLayout}
      />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
