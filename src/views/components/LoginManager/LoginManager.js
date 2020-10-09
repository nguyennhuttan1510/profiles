import React, { useEffect, useState } from "react";
import "./Css.css";
import * as firebase from "firebase";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "../../../components/PrivateRoutes/FakeAuth";

const LoginManager = (props) => {
  const [inputPassword, setInputPassword] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const connectData = firebase.database().ref("management/accounts/password");
    connectData.on("value", (data) => {
      console.log(data.val());

      setInputPassword(data.val());
    });
  });
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {
    from: { pathname: "/service-management" },
  };
  let login = () => {
    if (password === inputPassword) {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    }
  };

  return (
    <div className="bg-image">
      <div className="container h-80 ">
        <div
          className="row align-items-center h-100"
          style={{ padding: "100px 0px" }}
        >
          <div className="col-3 mx-auto">
            <div className="text-center">
              <h2 style={{ color: "#f94c0d" }}>
                This is form Login for Moderator
              </h2>
              <small style={{ color: "#dadada" }}>
                Please, you return Home page if you are not Moderator
              </small>
              <div className="py-3">
                <img
                  id="profile-img"
                  className="rounded-circle profile-img-card"
                  src="https://i.imgur.com/6b6psnA.png"
                  alt="it don't have"
                />
              </div>
              <p id="profile-name" className="profile-name-card" />
              <form className="form-signin">
                <input
                  type="password"
                  name="password"
                  id="inputPassword"
                  className="form-control form-group"
                  placeholder="password"
                  required
                  autofocus
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  className="btn btn-lg btn-primary btn-block btn-signin"
                  type="button"
                  onClick={login}
                >
                  enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginManager.propTypes = {};

export default LoginManager;
