import React from "react";
import PropTypes from "prop-types";

const TopBar = (props) => {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <span className="text-primary">Skater</span>
              </a>
            </div>
            <div className="col-12">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <a href="#home-section" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="has-children">
                    <a href="#about-section" className="nav-link">
                      About
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="#pricing-section" className="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#faq-section" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="has-children">
                        <a href="#">More Links</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Menu One</a>
                          </li>
                          <li>
                            <a href="#">Menu Two</a>
                          </li>
                          <li>
                            <a href="#">Menu Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#testimonials-section" className="nav-link">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#blog-section" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-white"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

TopBar.propTypes = {};

export default TopBar;
