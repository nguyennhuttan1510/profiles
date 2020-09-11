import React from "react";
import PropTypes from "prop-types";
import { Footer, TopBar } from "../components";

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

Main.propTypes = {};

export default Main;
