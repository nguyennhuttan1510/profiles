import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { BusinessPage, HomePage } from "./views";
import { Main } from "./layouts";
import { RouteWithLayout } from "./components";
import {
  ContactMe,
  MyBestSetting,
  IndexSetting,
  PriceSetting,
  ServiceSetting,
} from "./views/ProfileManagement";
import TimeLine from "./views/ProfileManagement/TimeLine/TimeLine";
const Routes = (props) => {
  const conditionShowLayout = {
    noBannerHeader: true,
    showMenuForManager: true,
  };
  return (
    <Switch>
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
      {/* moderator */}
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
