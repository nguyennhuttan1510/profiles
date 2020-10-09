import React from "react";
import PropTypes from "prop-types";

const BannerHeader = (props) => {
  return (
    <div className="owl-carousel slide-one-item">
      <div
        className="site-section-cover overlay img-bg-section"
        style={{ backgroundImage: 'url("./images/hero_3.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 col-lg-9">
              <h1
                data-aos="fade-up"
                data-aos-delay
                style={{ paddingTop: "85px" }}
              >
                Hi I'm <br />
                Nguyễn Nhựt Tân
                <br /> and I Developer
              </h1>
              <p
                className="mb-5 w-75 mx-auto"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                interface design and website system building is my speciality
              </p>
              {/* <p data-aos="fade-up" data-aos-delay={200}>
                <a
                  href="#contact-section"
                  className="btn btn-outline-white border-w-2 btn-md"
                >
                  Get in touch
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="site-section-cover overlay img-bg-section"
        style={{ backgroundImage: 'url("./images/hero_2.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 col-lg-8">
              <h1 data-aos="fade-up" data-aos-delay>
                put creativity newness on top
              </h1>
              <p
                className="mb-5 w-75 mx-auto"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Creative energy is one of the powerful weapons for me
              </p>
              <p data-aos="fade-up" data-aos-delay={200}>
                <a
                  href="#contact-section"
                  className="btn btn-outline-white border-w-2 btn-md"
                >
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
