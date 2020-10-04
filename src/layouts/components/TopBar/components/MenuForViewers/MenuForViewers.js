import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const MenuForViewers = (props) => {
  return (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-menu">
      <li className="nav-item active">
        <NavLink to="/profile">
          <span className="nav-link">Home</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/services">
          <span className="nav-link">Services</span>
        </NavLink>
      </li>
    </ul>
  );
};

MenuForViewers.propTypes = {};

export default MenuForViewers;
