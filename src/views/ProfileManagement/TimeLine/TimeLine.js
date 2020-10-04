import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HandlePush,
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";

const TimeLine = (props) => {
  const object = {
    title: "",
    content: "",
    year: "",
    format: {
      animation: "",
      color: "",
      icon: "",
    },
  };
  const [timeLine, setTimeLine] = useState([]);
  const [pushTimeLine, setPushTimeLine] = useState(object);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");
  const [typeButon, setTypeButton] = useState();
  useEffect(() => {
    //connect Timeline
    const object = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        content: e.val().content,
        year: e.val().year,
        format: e.val().format,
      };
      return object;
    };
    HandleConnectFirebase("timeline", object, setTimeLine);
  }, []);

  const handleChangeTimeLine = (e) => {
    const { name, value } = e.target;
    setPushTimeLine({
      ...pushTimeLine,
      [name]: value,
    });
  };

  const handleChangeTimeLineChild = (e) => {
    const { name, value } = e.target;
    setPushTimeLine((prevState) => ({
      ...prevState,
      format: {
        ...prevState.format,
        [name]: value,
      },
    }));
  };

  const handleDefaultStateTimeLine = (title, content, year, format) => {
    const object = {
      title: title,
      content: content,
      year: year,
      format: format,
    };
    setPushTimeLine(object);
  };
  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>History Person Management</h2>
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
          <h3 style={{ color: "#ff800b" }}>Tag TimeLine</h3>
        </div>
        <div className="col-4">
          {/* tagpanel */}
          <div className="list-group" id="list-tab" role="tablist">
            {timeLine.map((value) => (
              <a
                key={value.id}
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href={"#" + value.id}
                role="tab"
                onClick={() => {
                  setId(value.id);
                  handleDefaultStateTimeLine(
                    value.title,
                    value.content,
                    value.year,
                    value.format
                  );
                }}
              >
                {value.year}
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
                    placeholder="Title for timeline"
                    defaultValue={typeButon === 2 ? pushTimeLine.title : null}
                    onChange={handleChangeTimeLine}
                  />
                  <label for="content">Content</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="content"
                    placeholder="Content for timeline"
                    defaultValue={typeButon === 2 ? pushTimeLine.content : null}
                    onChange={handleChangeTimeLine}
                  />
                  <label for="year">Year</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="year"
                    placeholder="Year for timeline"
                    defaultValue={typeButon === 2 ? pushTimeLine.year : null}
                    onChange={handleChangeTimeLine}
                  />
                </div>
              </div>
              <div
                className="col-5"
                style={{ borderLeft: "1px solid #ff800b" }}
              >
                <h4>Format</h4>
                <div className="form-group">
                  <label for="">Effects</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="animation"
                    placeholder="Animation for skill"
                    defaultValue={
                      typeButon === 2 ? pushTimeLine.format.animation : null
                    }
                    onChange={handleChangeTimeLineChild}
                  />
                  <label for="color">Color</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="color"
                    placeholder="Color for timeline"
                    defaultValue={
                      typeButon === 2 ? pushTimeLine.format.color : null
                    }
                    onChange={handleChangeTimeLineChild}
                  />
                  <label for="icon">Icon</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="icon"
                    placeholder="Icon for timeline"
                    defaultValue={
                      typeButon === 2 ? pushTimeLine.format.icon : null
                    }
                    onChange={handleChangeTimeLineChild}
                  />
                </div>
              </div>
              {typeButon === 2 ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setStatus(false);
                    HandleSet("timeline", pushTimeLine, id);
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
                    HandlePush("timeline", pushTimeLine);
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
                {timeLine.map((value) => {
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
                              Content: {value.content}
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
                              Effects: {value.format.animation}
                            </li>
                            <li className="list-group-item">
                              Color: {value.format.color}
                            </li>
                            <li className="list-group-item">
                              Icon: {value.format.icon}
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
                          HandleDeleteItem(value.id, "timeline");
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
    </div>
  );
};

TimeLine.propTypes = {};

export default TimeLine;
