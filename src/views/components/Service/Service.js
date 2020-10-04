import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";

const Service = (props) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("services");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          content: e.val().content,
          image: e.val().image,
          deplay: e.val().deplay,
        });
      });
      setService(arr);
    });
  }, []);
  return (
    <div className="site-section" id="services-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay>
              <h2>Services</h2>
              <p>
                We provide website construction and design services for all
                objects according to the requirements that customers make
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {service.map((value) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={value.deplay}
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  <img
                    style={{ width: "45%" }}
                    src={"images/" + value.image + ".png"}
                    alt=""
                  />
                </div>

                <h3 className="mb-3 text-white">{value.title}</h3>
                {value.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {};

export default Service;
