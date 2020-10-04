import React, { useEffect, useState } from "react";
import {
  HandlePush,
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";
import TagSkill from "./components/TagSkill/TagSkill";
import TagExperience from "./components/TagExperience/TagExperience";
const MyBestSetting = () => {
  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    //connect skill
    const objectSkill = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        color: e.val().color,
        index: e.val().index,
        animation: e.val().animation,
      };
      return object;
    };
    HandleConnectFirebase("mybest/skill", objectSkill, setSkill);

    // connect experience
    const objectExperience = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        color: e.val().color,
        icon: e.val().icon,
        animation: e.val().animation,
      };
      return object;
    };
    HandleConnectFirebase("mybest/experience", objectExperience, setExperience);
  }, []);
  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>Person Management</h2>
          </div>
        </div>
      </div>
      <TagSkill
        skill={skill}
        HandlePush={HandlePush}
        HandleDeleteItem={HandleDeleteItem}
        HandleSet={HandleSet}
      />
      <TagExperience
        experience={experience}
        HandlePush={HandlePush}
        HandleDeleteItem={HandleDeleteItem}
        HandleSet={HandleSet}
      />
    </div>
  );
};

export default MyBestSetting;
