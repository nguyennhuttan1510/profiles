import React from "react";
import PropTypes from "prop-types";

const BannerHeader = (props) => {
  return (
    <div className="owl-carousel slide-one-item">
      <div
        className="site-section-cover overlay img-bg-section"
        style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 col-lg-7">
              <h1 data-aos="fade-up" data-aos-delay>
                Hi I'm John and I Skate a lot
              </h1>
              <p
                className="mb-5 w-75 mx-auto"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, cumque vitae animi.
              </p>
              <p data-aos="fade-up" data-aos-delay={200}>
                <a href="#" className="btn btn-outline-white border-w-2 btn-md">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="site-section-cover overlay img-bg-section"
        style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 col-lg-8">
              <h1 data-aos="fade-up" data-aos-delay>
                New Generation of Skating
              </h1>
              <p
                className="mb-5 w-75 mx-auto"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                odit dolorum voluptates!
              </p>
              <p data-aos="fade-up" data-aos-delay={200}>
                <a href="#" className="btn btn-outline-white border-w-2 btn-md">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerHeader.propTypes = {};

export default BannerHeader;
