import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { NavLink } from "react-router-dom";

const PricingTable = (props) => {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("pricetable");
    connectData.on("value", (data) => {
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          price: e.val().price,
          list: e.val().list,
          deplay: e.val().deplay,
        });
      });
      setPrice(arr);
    });
  }, []);
  return (
    <section className="site-section" id="pricing-section">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-md-7">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay>
              <h2>Session Pricing</h2>
              <p>
                Combo website design will be more convenient for customers
                wishing to build the whole website
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {price.map((value) => {
            return (
              <div
                key={value.id}
                className="col-md-6 mb-4 mb-lg-0 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={value.deplay}
              >
                <div className="pricing">
                  <h3
                    className="text-center text-white"
                    style={{ minHeight: "84px" }}
                  >
                    {value.title}
                  </h3>
                  <div className="price text-center mb-4 ">
                    <span>
                      <span>${value.price}</span> / year
                    </span>
                  </div>
                  <ul
                    className="list-unstyled ul-check success mb-5"
                    style={{ minHeight: "420px" }}
                  >
                    {value.list.map((index, key) => {
                      return <li key={key}>{index}</li>;
                    })}
                  </ul>
                  <p className="text-center">
                    <NavLink to={"/confirm-service/pricetable/" + value.id}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-md"
                      >
                        Buy Now
                      </button>
                    </NavLink>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row site-section" id="faq-section">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title text-primary">
              Frequently Ask Questions
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-5" data-aos="fade-up">
              <h3 className="text-primary h4 mb-4">
                liên hệ tôi bằng cách nào ?
              </h3>
              <p>
                Hotline: 0902356022
                <br />
                Email: nguyentan15102000@gmail.com
                <br />
              </p>
            </div>
            <div className="mb-5" data-aos="fade-up">
              <h3 className="text-primary h4 mb-4">
                thời gian hoạt động của tôi ?
              </h3>
              <p>9AM-5PM từ thứ 2 đến thứ 7</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-5" data-aos="fade-up">
              <h3 className="text-primary h4 mb-4">
                dịch vụ sau khi đưa trang web vào hoạt động là gì?
              </h3>
              <p>
                chúng tôi sẽ là người trực tiếp bảo trì, nếu website có sự cố
              </p>
            </div>
            <div className="mb-5" data-aos="fade-up">
              <h3 className="text-primary h4 mb-4">
                làm thế nào khi tôi muốn chỉnh sửa giao diện website?
              </h3>
              <p>
                chúng tôi có dịch vụ hổ trợ thay đổi giao diện website khi được
                yêu cầu từ khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PricingTable.propTypes = {};

export default PricingTable;
