import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Css.css";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../../FirebaseConnect";
import { Experience, Skill } from "./componenents";

const MyBest = (props) => {
  const [skill, setSkill] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("mybest/skill");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          color: e.val().color,
          index: e.val().index,
          animation: e.val().animation,
        });
      });
      setSkill(arr);
    });

    const connectDataExperience = firebase.database().ref("mybest/experience");
    connectDataExperience.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          color: e.val().color,
          icon: e.val().icon,
          animation: e.val().animation,
        });
      });
      setExperience(arr);
    });
  }, []);
  return (
    <div className="site-section" id="infomation-resume">
      <Skill skill={skill} />
      <Experience experience={experience} />
    </div>
  );
};

MyBest.propTypes = {};

export default MyBest;
