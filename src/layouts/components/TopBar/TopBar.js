import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Css.css";
import MenuForManager from "./components/MenuForManager/MenuForManager";
import MenuForViewers from "./components/MenuForViewers/MenuForViewers";
const TopBar = (props) => {
  const { showMenuForManager } = props;
  return (
    <div className="container">
      <div className="row animation" id="navbar">
        <div className="col-12 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-topic">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand text-menu" href="#">
                Hidden brand
              </a>
              {showMenuForManager ? <MenuForManager /> : <MenuForViewers />}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {};
TopBar.defaultProps = {
  showMenuForManager: false,
};
export default TopBar;
