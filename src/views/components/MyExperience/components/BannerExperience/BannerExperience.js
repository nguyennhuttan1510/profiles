import React from "react";
import PropTypes from "prop-types";

const BannerExperience = (props) => {
  return (
    <div className="row justify-content-center mb-4 block-img-video-1-wrap">
      <div className="col-md-12 mb-5">
        <figure className="block-img-video-1" data-aos="fade">
          <a
            href="https://www.youtube.com/watch?v=Pv7JKxRd7jo"
            data-fancybox
            data-ratio={2}
          >
            <span className="icon">
              <span className="icon-play" />
            </span>
            <img src={process.env.PUBLIC_URL + "/images/hero_2.jpg" } alt="banner" className="img-fluid" />
          </a>
        </figure>
      </div>
    </div>
  );
};

BannerExperience.propTypes = {};

export default BannerExperience;
