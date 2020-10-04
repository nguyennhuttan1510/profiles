import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HandlePush,
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";

const ServiceSetting = (props) => {
  const object = {
    title: "",
    content: "",
    image: "",
    deplay: "",
  };
  const [service, setService] = useState([]);
  const [pushService, setPushService] = useState(object);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");
  const [typeButon, setTypeButton] = useState();
  useEffect(() => {
    //connect service
    const object = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        content: e.val().content,
        image: e.val().image,
        deplay: e.val().deplay,
      };
      return object;
    };
    HandleConnectFirebase("services", object, setService);
  }, []);

  const handleChangeService = (e) => {
    const { name, value } = e.target;
    setPushService({
      ...pushService,
      [name]: value,
    });
  };

  const handleDefaultStateService = (title, content, image, deplay) => {
    const object = {
      title: title,
      content: content,
      image: image,
      deplay: deplay,
    };
    setPushService(object);
  };
  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>Services Management</h2>
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
          <h3 style={{ color: "#ff800b" }}>Tag Service Table</h3>
        </div>
        <div className="col-4">
          {/* tagpanel */}
          <div className="list-group" id="list-tab" role="tablist">
            {service.map((value) => (
              <a
                key={value.id}
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href={"#" + value.id}
                role="tab"
                onClick={() => {
                  setId(value.id);
                  handleDefaultStateService(
                    value.title,
                    value.content,
                    value.image,
                    value.deplay
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
                    placeholder="Title for service"
                    defaultValue={typeButon === 2 ? pushService.title : null}
                    onChange={handleChangeService}
                  />
                  <label for="content">Content</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="service"
                    placeholder="Service for the service"
                    defaultValue={typeButon === 2 ? pushService.content : null}
                    onChange={handleChangeService}
                  />
                </div>
              </div>
              <div
                className="col-5"
                style={{ borderLeft: "1px solid #ff800b" }}
              >
                <h4>Format</h4>
                <div className="form-group">
                  <label for="deplay">Deplay</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="deplay"
                    placeholder="Deplay for service"
                    defaultValue={typeButon === 2 ? pushService.deplay : null}
                    onChange={handleChangeService}
                  />
                  <label for="deplay">Icon</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="image"
                    placeholder="Image for service"
                    defaultValue={typeButon === 2 ? pushService.image : null}
                    onChange={handleChangeService}
                  />
                </div>
              </div>
              {typeButon === 2 ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setStatus(false);
                    HandleSet("services", pushService, id);
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
                    HandlePush("services", pushService);
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
            <div className="tab-content">
              {service.map((value) => {
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
                            Deplay: {value.deplay}
                          </li>
                          <li className="list-group-item">
                            Icon: {value.image}
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
                        HandleDeleteItem(value.id, "services");
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

ServiceSetting.propTypes = {};

export default ServiceSetting;
