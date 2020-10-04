import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import "./Css.css";
import {
  HandleDeleteItem,
  HandleConnectFirebase,
} from "../../../function/HandleData";

const ContactMe = (props) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const func = (e) => {
      const object = {
        id: e.key,
        name: e.val().name,
        content: e.val().content,
        email: e.val().email,
        phone: e.val().phone,
      };
      return object;
    };
    HandleConnectFirebase("management/contacts", func, setContacts);
  }, []);

  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>Contact Management</h2>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          borderRadius: "20px",
          backgroundColor: "#3d3f40",
          padding: "25px 10px",
        }}
      >
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            {contacts.map((value) => (
              <a
                key={value.id}
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href={"#" + value.id}
                role="tab"
              >
                {value.name}
              </a>
            ))}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content">
            {contacts.map((value) => {
              return (
                <div className={"tab-pane"} id={value.id} role="tabpanel">
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-group list-group-flush mb-4 styleli">
                        <li className="list-group-item">
                          Full Name: {value.name}
                        </li>
                        <li className="list-group-item">
                          Phone: {value.phone}
                        </li>
                        <li className="list-group-item">
                          Email: {value.email}
                        </li>
                        <li className="list-group-item">
                          Content: {value.content}
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          HandleDeleteItem(value.id, "management/contacts");
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

ContactMe.propTypes = {};

export default ContactMe;
