import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";

const IndexSetting = (props) => {
  const objectIndex = {
    title: "",
    animation: "",
    color: "",
    index: "",
  };
  const [indexPerson, setIndexPerson] = useState([]);
  const [pushIndex, setPushIndex] = useState(objectIndex);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");
  const [typeButon, setTypeButton] = useState();
  useEffect(() => {
    //connect skill
    const objectIndex = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        deplay: e.val().deley,
        index: e.val().index,
        animation: e.val().animation,
      };
      return object;
    };
    HandleConnectFirebase("indexperson/index", objectIndex, setIndexPerson);
  }, []);

  const handleDefaultStateIndex = (title, animation, deplay, index) => {
    const object = {
      title: title,
      animation: animation,
      deplay: deplay,
      index: index,
    };
    setPushIndex(object);
  };

  const handleChangeIndex = (e) => {
    const { name, value } = e.target;
    setPushIndex({
      ...pushIndex,
      [name]: value,
    });
  };

  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>Index Person Management</h2>
          </div>
        </div>
      </div>
      <div
        className="row mb-5"
        style={{
          borderRadius: "20px",
          backgroundColor: "#3d3f40",
          padding: "25px 10px",
        }}
      >
        <div className="col-12">
          <h3 style={{ color: "#ff800b" }}>Tag Index</h3>
        </div>
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            {indexPerson.map((value) => (
              <a
                key={value.id}
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href={"#" + value.id}
                role="tab"
                onClick={() => {
                  setId(value.id);
                  handleDefaultStateIndex(
                    value.title,
                    value.animation,
                    value.deplay,
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
          {status ? (
            <div className="row">
              <div className="col-7">
                <h4>Contents</h4>
                <div className="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="title"
                    placeholder="Title for index"
                    defaultValue={typeButon === 2 ? pushIndex.title : null}
                    onChange={handleChangeIndex}
                  />
                  <label for="index">Index</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="index"
                    placeholder="Index for index"
                    defaultValue={typeButon === 2 ? pushIndex.index : null}
                    onChange={handleChangeIndex}
                  />
                </div>
              </div>
              <div
                className="col-5"
                style={{ borderLeft: "1px solid #ff800b" }}
              >
                <h4>Format</h4>
                <div className="form-group">
                  <label for="animation">Effects</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="animation"
                    placeholder="Animation for index"
                    defaultValue={typeButon === 2 ? pushIndex.animation : null}
                    onChange={handleChangeIndex}
                  />
                  <label for="color">Color</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="color"
                    placeholder="Color for index"
                    defaultValue={typeButon === 2 ? pushIndex.deplay : null}
                    onChange={handleChangeIndex}
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setStatus(false);
                  HandleSet("indexperson/index", pushIndex, id);
                }}
              >
                Save
              </button>

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

            <div className="tab-content">
              {indexPerson.map((value) => {
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
                            Deplay: {value.deplay}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger ml-4"
                      onClick={() => {
                        HandleDeleteItem(value.id, "indexperson/index");
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
          )}
        </div>
      </div>
    </div>
  );
};

IndexSetting.propTypes = {};

export default IndexSetting;
