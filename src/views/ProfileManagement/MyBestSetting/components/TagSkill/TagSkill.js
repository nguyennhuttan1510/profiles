import React, { useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";

const TagSkill = (props) => {
  const { skill, HandlePush, HandleDeleteItem, HandleSet } = props;

  const objectSkill = {
    title: "",
    animation: "",
    color: "",
    index: "",
  };

  const [pushSkill, setPushSkill] = useState(objectSkill);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");
  const [typeButon, setTypeButton] = useState();

  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    setPushSkill({
      ...pushSkill,
      [name]: value,
    });
  };

  const handleDefaultStateSkill = (title, animation, color, index) => {
    const objectSkill = {
      title: title,
      animation: animation,
      color: color,
      index: index,
    };
    setPushSkill(objectSkill);
  };

  return (
    <div
      className="row mb-5"
      style={{
        borderRadius: "20px",
        backgroundColor: "#3d3f40",
        padding: "25px 10px",
      }}
    >
      <div className="col-12">
        <h3 style={{ color: "#ff800b" }}>Tag Skill</h3>
      </div>
      <div className="col-4">
        {/* tagpanel */}
        <div className="list-group" id="list-tab" role="tablist">
          {skill.map((value) => (
            <a
              key={value.id}
              className="list-group-item list-group-item-action"
              data-toggle="list"
              href={"#" + value.id}
              role="tab"
              onClick={() => {
                setId(value.id);
                handleDefaultStateSkill(
                  value.title,
                  value.animation,
                  value.color,
                  value.index
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
                  defaultValue={typeButon === 2 ? pushSkill.title : null}
                  onChange={handleChangeSkill}
                />
                <label for="index">Index</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="index"
                  placeholder="Index for skill"
                  defaultValue={typeButon === 2 ? pushSkill.index : null}
                  onChange={handleChangeSkill}
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
                  defaultValue={typeButon === 2 ? pushSkill.animation : null}
                  onChange={handleChangeSkill}
                />
                <label for="color">Color</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="color"
                  placeholder="Color for skill"
                  defaultValue={typeButon === 2 ? pushSkill.color : null}
                  onChange={handleChangeSkill}
                />
              </div>
            </div>
            {typeButon === 2 ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setStatus(false);
                  HandleSet("mybest/skill", pushSkill, id);
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
                  HandlePush("mybest/skill", pushSkill);
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
              {skill.map((value) => {
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
                            Index: {value.index}
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

TagSkill.propTypes = {};

export default TagSkill;
