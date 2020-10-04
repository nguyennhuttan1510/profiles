import React from "react";
import PropTypes from "prop-types";

const IndexPerson = (props) => {
  const { index } = props;
  return (
    <div className="row" style={{ marginTop: "-90px" }}>
      <div className="col-12 mb-4">
        <div className="row">
          {index.map((value) => (
            <div
              className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
              data-aos={value.animation}
              data-aos-delay={value.deley}
            >
              <div className="block-counter-1">
                <span className="number text-primary">
                  <span data-number={value.index}>0</span>+
                </span>
                <span className="caption">{value.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

IndexPerson.propTypes = {};

export default IndexPerson;
