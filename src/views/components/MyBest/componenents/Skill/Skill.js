import React from "react";
import PropTypes from "prop-types";

const Skill = (props) => {
  const { skill } = props;
  return (
    <div className="block__73694 mb-2">
      <div className="container">
        <div className="row d-flex no-gutters align-items-stretch">
          <div
            className="col-12 col-lg-6 block__73422"
            style={{ backgroundImage: 'url("images/img_1.jpg")' }}
            data-aos="fade-right"
            data-aos-delay
          ></div>
          <div
            className="col-lg-5 ml-auto p-lg-5 mt-4 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay
          >
            <h2 className="mb-3 text-primary">My Skill Expertise</h2>
            <p>
              My expertise is designing and developing front-end websites.
              <br /> In addition, I also built a database system and the
              function of a website, this is my skills index
            </p>
            {skill.map((value, key) => (
              <div
                key={key}
                className="progress_bar"
                data-aos={value.animation}
              >
                <h4 className="progressbar-title">{value.title}</h4>
                <div className="progress-bar-inner">
                  <div
                    className="progress-bar"
                    data-transitiongoal={value.index}
                    role="progressbar"
                    style={{
                      width: value.index + "%",
                      background: value.color,
                    }}
                    aria-valuenow={value.index}
                  >
                    <span style={{ color: "#ffffff" }}>
                      {value.index + "%"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {};

export default Skill;
