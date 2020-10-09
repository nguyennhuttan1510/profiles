import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HandlePush,
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";
const PriceSetting = (props) => {
  const object = {
    title: "",
    price: "",
    deplay: "",
    list: [],
  };
  const [price, setPrice] = useState([]);
  const [pushPrice, setPushPrice] = useState(object);
  const [status, setStatus] = useState(false);
  const [statusList, setStatusList] = useState(false);
  const [id, setId] = useState("");
  const [idList, setIdList] = useState("");
  const [typeButon, setTypeButton] = useState();
  const [listContent, setListContent] = useState("");
  useEffect(() => {
    //connect price
    const object = (e) => {
      const object = {
        id: e.key,
        title: e.val().title,
        price: e.val().price,
        deplay: e.val().deplay,
        list: e.val().list,
      };
      return object;
    };
    HandleConnectFirebase("pricetable", object, setPrice);
  }, []);

  const url = "pricetable/" + id + "/list";
  const indexItemListArray = pushPrice.list.length;

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    setPushPrice({
      ...pushPrice,
      [name]: value,
    });
  };

  const handleDefaultStatePrice = (title, price, deplay, list) => {
    const object = {
      title: title,
      price: price,
      deplay: deplay,
      list: list,
    };
    setPushPrice(object);
  };
  console.log(price);
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
          <h3 style={{ color: "#ff800b" }}>Tag Price Table</h3>
        </div>
        <div className="col-4">
          {/* tagpanel */}
          <div className="list-group" id="list-tab" role="tablist">
            {price.map((value) => (
              <a
                key={value.id}
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href={"#" + value.id}
                role="tab"
                onClick={() => {
                  setId(value.id);
                  handleDefaultStatePrice(
                    value.title,
                    value.price,
                    value.deplay,
                    value.list
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
                    placeholder="Title for price"
                    defaultValue={typeButon === 2 ? pushPrice.title : null}
                    onChange={handleChangePrice}
                  />
                  <label for="price">Price</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="price"
                    placeholder="Price for price"
                    defaultValue={typeButon === 2 ? pushPrice.price : null}
                    onChange={handleChangePrice}
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
                    placeholder="Deplay for price"
                    defaultValue={typeButon === 2 ? pushPrice.deplay : null}
                    onChange={handleChangePrice}
                  />
                </div>
              </div>
              {typeButon === 2 ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setStatus(false);
                    HandleSet("pricetable", pushPrice, id);
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
                    HandlePush("pricetable", pushPrice);
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
              {price.map((value) => {
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
                            Price: {value.price}
                          </li>
                          <li className="list-group-item">
                            List Content:
                            <ul>
                              {value.list.map((e, key) => (
                                <li
                                  data-toggle="modal"
                                  data-target="#form"
                                  onClick={() => {
                                    setIdList(key);
                                    setStatusList(!statusList);
                                  }}
                                >
                                  {e}
                                </li>
                              ))}
                            </ul>
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
                        HandleDeleteItem(value.id, "pricetable");
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

          <div
            className="modal fade"
            id="form"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Change or Add content
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <>
                      <div className="form-group">
                        <label for="list">Set Content</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Edit content"
                          defaultValue={pushPrice.list[idList]}
                          onChange={(e) => {
                            setListContent(e.target.value);
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-success "
                        onClick={() => {
                          HandleSet(url, listContent, indexItemListArray);
                        }}
                      >
                        add
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning ml-4"
                        data-dismiss="modal"
                        onClick={() => {
                          pushPrice.list.splice(idList, 1);
                          pushPrice.list.splice(idList, 0, listContent);
                          HandleSet(url, listContent, idList);
                        }}
                      >
                        save
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger ml-4"
                        data-dismiss="modal"
                        onClick={() => {
                          HandleDeleteItem(idList, url);
                        }}
                      >
                        delete
                      </button>
                    </>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PriceSetting.propTypes = {};

export default PriceSetting;
