import React from "react";
import PropTypes from "prop-types";

const FormatIcons = (props) => {
  const { size, color, icon } = props;
  return (
    <span
      style={{
        fontSize: size,
        color: color,
      }}
    >
      <i className={icon}></i>
    </span>
  );
};

FormatIcons.propTypes = {};
FormatIcons.defaultProps = {
  color: "black",
  size: "2em",
};

export default FormatIcons;
