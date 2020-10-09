import React from "react";
import PropTypes from "prop-types";
import { Footer, TopBar } from "../components";
import { BannerHeader } from "../components";

const Main = (props) => {
  const { children, conditionShowLayout } = props;
  return (
    <div>
      <TopBar showMenuForManager={conditionShowLayout.showMenuForManager} />
      {conditionShowLayout.noBannerHeader ? null : <BannerHeader />}
      {children}
      <Footer />
    </div>
  );
};

Main.propTypes = {};
Main.defaultProps = {
  conditionShowLayout: {
    showMenuForManager: false,
    noBannerHeader: false,
  },
};

export default Main;
