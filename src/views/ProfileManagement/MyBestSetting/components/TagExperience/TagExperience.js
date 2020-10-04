import React, { useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { FormatIcons } from "../../../../../components";
const TagExperience = (props) => {
  const { experience, HandlePush, HandleDeleteItem, HandleSet } = props;
  const objectExperience = {
    title: "",
    animation: "",
    color: "",
    icon: "",
  };
  const [pushExperience, setPushExperience] = useState(objectExperience);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");
  const [typeButon, setTypeButton] = useState();
  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setPushExperience({
      ...pushExperience,
      [name]: value,
    });
  };

  // const handleClickExperience = () => {
  //   const connectDataExperience = firebase.database().ref("mybest/experience");
  //   connectDataExperience.child(id).set(pushExperience);
  // };

  const handleDefaultStateExperience = (title, animation, color, icon) => {
    const objectSkill = {
      title: title,
      animation: animation,
      color: color,
      icon: icon,
    };
    setPushExperience(objectSkill);
  };

  return (
    <div
      className="row mt-10"
      style={{
        borderRadius: "20px",
        backgroundColor: "#3d3f40",
        padding: "25px 10px",
      }}
    >
      <div className="col-12">
        <h3 style={{ color: "#ff800b" }}>Tag Experience</h3>
      </div>
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {experience.map((value) => (
            <a
              key={value.id}
              className="list-group-item list-group-item-action"
              data-toggle="list"
              href={"#" + value.id}
              role="tab"
              onClick={() => {
                setId(value.id);
                handleDefaultStateExperience(
                  value.title,
                  value.animation,
                  value.color,
                  value.icon
                );
              }}
            >
              {value.title}
            </a>
          ))}
        </div>
      </div>
      <div className="col-8">
        {/* tag contents */}
        {status ? (
          //form edit and add
          <div className="row">
            <div className="col-7">
              <h4>Contents</h4>
              <div className="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="title"
                  placeholder="Title for skill"
                  defaultValue={typeButon === 2 ? pushExperience.title : null}
                  onChange={handleChangeExperience}
                />
                <label for="index">Icon</label>
                <span className="ml-2">
                  <FormatIcons
                    icon={pushExperience.icon}
                    color={pushExperience.color}
                  />
                </span>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="index"
                  placeholder="Index for skill"
                  defaultValue={typeButon === 2 ? pushExperience.icon : null}
                  onChange={handleChangeExperience}
                />
              </div>
            </div>
            <div className="col-5" style={{ borderLeft: "1px solid #ff800b" }}>
              <h4>Format</h4>
              <div className="form-group">
                <label for="animation">Effects</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="animation"
                  placeholder="Animation for skill"
                  defaultValue={
                    typeButon === 2 ? pushExperience.animation : null
                  }
                  onChange={handleChangeExperience}
                />
                <label for="color">Color</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="color"
                  placeholder="Color for skill"
                  defaultValue={typeButon === 2 ? pushExperience.color : null}
                  onChange={handleChangeExperience}
                />
              </div>
            </div>
            {typeButon === 2 ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setStatus(false);
                  HandleSet("mybest/experience", pushExperience, id);
                }}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setStatus(false);
                  HandlePush("mybest/skill", pushExperience);
                }}
              >
                Apply
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger ml-4"
              onClick={() => {
                setStatus(!status);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          //form default
          <>
            <div className="tab-content">
              {experience.map((value) => {
                return (
                  <div className="tab-pane" id={value.id} role="tabpanel">
                    <div className="row">
                      <div className="col-7">
                        <h4>Contents</h4>
                        <ul className="list-group list-group-flush mb-4 styleli">
                          <li className="list-group-item">
                            Title: {value.title}
                          </li>
                          <li className="list-group-item">
                            <FormatIcons
                              icon={pushExperience.icon}
                              color={pushExperience.color}
                            />{" "}
                            <br />
                            Icon: {value.icon}
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-5"
                        style={{ borderLeft: "1px solid #ff800b" }}
                      >
                        <h4>Format</h4>
                        <ul className="list-group list-group-flush mb-4 styleli">
                          <li className="list-group-item">
                            Effects: {value.animation}
                          </li>
                          <li className="list-group-item">
                            Color: {value.color}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        setTypeButton(1);
                        setStatus(!status);
                      }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger ml-4"
                      onClick={() => {
                        HandleDeleteItem(value.id, "mybest/skill");
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning ml-4"
                      onClick={() => {
                        setTypeButton(2);
                        setStatus(!status);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TagExperience.propTypes = {};

export default TagExperience;
