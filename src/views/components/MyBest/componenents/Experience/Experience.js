import React from "react";
import PropTypes from "prop-types";
import { FormatIcons } from "../../../../../components";
const Experience = (props) => {
  const { experience } = props;
  return (
    <div className="block__73694">
      <div className="container">
        <div className="row d-flex no-gutters align-items-stretch">
          <div
            className="col-12 col-lg-6 block__73422 order-lg-2"
            style={{ backgroundImage: 'url("images/img_2.jpg")' }}
            data-aos="fade-left"
            data-aos-delay
          ></div>
          <div
            className="col-lg-5 mr-auto p-lg-3 mt-4 mt-lg-0 order-lg-1 pt-lg-5"
            data-aos="fade-right"
            data-aos-delay
          >
            <h2 className="mb-3 text-primary">My Work Experience</h2>
            <p>
              These are the subjects I am and have worked through with many
              projects big and small, but my advantage is still on the
              Front-end.
            </p>
            <div className="container">
              <div className="row row-col-2">
                {experience.map((value, key) => (
                  <div
                    key={key}
                    className="col-lg-5 p-2 m-2 "
                    style={{ color: value.color }}
                    data-aos={value.animation}
                    data-aos-delay
                  >
                    <div className="tab-shadow bg-light">
                      <div className="table-experience">
                        <FormatIcons
                          size="3em"
                          color={value.color}
                          icon={value.icon}
                        />
                      </div>
                      <h5
                        style={{ textAlign: "center", paddingBottom: "10px" }}
                      >
                        {value.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
