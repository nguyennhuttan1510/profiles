import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Css.css";
const MenuForManager = (props) => {
  return (
    <>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-menu">
        <li className="nav-item active">
          <NavLink to="/service-management">
            <span className="nav-link">Service</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-management">
            <span className="nav-link">Contact Me</span>
          </NavLink>
        </li>
        <li className="nav-item hor">
          {/* <a className="nav-link" href="#">
            Setting
          </a> */}
          <NavLink to="/setting-management/MyBest">
            <span className="nav-link">Setting</span>
          </NavLink>
          <ul className="nav menu-child display">
            <li className="nav-item">
              <NavLink to="/setting-management/MyBest">
                <span className="nav-link">My Best</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/setting-management/index">
                <span className="nav-link">Index Person</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/setting-management/timeline">
                <span className="nav-link">History Person</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/setting-management/services">
                <span className="nav-link">Services</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/setting-management/pricetable">
                <span className="nav-link">Table Price</span>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

MenuForManager.propTypes = {};

export default MenuForManager;
