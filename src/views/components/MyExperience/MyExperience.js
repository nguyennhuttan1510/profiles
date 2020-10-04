import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../../FirebaseConnect";
import { IndexPerson, BannerExperience } from "./components";

const MyExperience = (props) => {
  const [index, setIndex] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("indexperson/index");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          deley: e.val().deley,
          index: e.val().index,
          animation: e.val().animation,
        });
      });
      setIndex(arr);
    });
  }, []);
  return (
    <div className="site-section" id="about-section">
      <div className="container">
        <IndexPerson index={index} />
        <BannerExperience />
      </div>
    </div>
  );
};

MyExperience.propTypes = {};

export default MyExperience;
