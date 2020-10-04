import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Css.css";
import * as firebase from "firebase";

const TimeLines = (props) => {
  const [time, setTime] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("timeline");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          other: e.val().other,
          color: e.val().color,
          content: e.val().content,
          year: e.val().year,
          format: e.val().format,
        });
      });
      setTime(arr);
    });
  }, []);

  const listOther = () => {
    return (
      <p>
        <ul className="ul-check primary list-unstyled mt-5">
          <li>coffee shop management app</li>
          <li>body management application</li>
          <li>sales website</li>
          <li>personal website</li>
        </ul>
      </p>
    );
  };

  return (
    <div className="site-section">
      <div className="block__73694 mb-2">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>WORK EXPERIENCE</h2>
                <p>
                  This is the process of building my professional experience
                  over time hooks
                </p>
              </div>
            </div>
          </div>
          <ul className="timeline">
            {time.map((value) => (
              <li className={value.format.position}>
                <div
                  className="timeline-badge"
                  style={{ backgroundColor: value.format.color }}
                >
                  <i className={value.format.icon}></i>
                </div>
                <div
                  className="timeline-panel"
                  data-aos={value.format.animation}
                  style={{ borderTop: "3px solid " + value.format.color }}
                >
                  <div className="timeline-heading">
                    <h4 className="timeline-title">
                      {value.title} <small>{value.year}</small>
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p>{value.content}</p>
                    {value.other ? listOther() : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

TimeLines.propTypes = {};

export default TimeLines;
