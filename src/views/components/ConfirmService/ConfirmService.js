import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { useParams } from "react-router-dom";
import { HandlePush } from "../../../function/HandleData";
const ConfirmService = (props) => {
  let object = {
    name: "",
    phone: "",
    email: "",
    service: {
      price: "",
      title: "",
    },
  };
  let { id, slug } = useParams();
  const [service, setService] = useState([]);
  const [pushOrderService, setPushOrderService] = useState(object);
  useEffect(() => {
    const connectData = firebase.database().ref(slug);
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      let object = {};
      data.forEach((e) => {
        if (id === e.key) {
          //lấy đối tượng dịch vụ cần mua
          object = {
            price: e.val().price,
            title: e.val().title,
          };
          //lấy mảng đối tượng dịch vụ về show ra trang
          if (slug === "services") {
            arr.push({
              id: e.key,
              title: e.val().title,
              content: e.val().content,
              image: e.val().image,
              price: e.val().price,
              listitem: e.val().listitem,
            });
          }
          if (slug === "pricetable") {
            arr.push({
              id: e.key,
              content: e.val().content,
              title: e.val().title,
              price: e.val().price,
              listitem: e.val().list,
            });
          }
        }
      });
      setPushOrderService((prevState) => ({
        ...prevState,
        service: object,
      }));
      setService(arr);
    });
  }, []);
  // set dữ liệu push lên firebase
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPushOrderService({
      ...pushOrderService,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <div className="block-heading-1">
              <h2>Confirm Service</h2>
            </div>
          </div>
        </div>
        {service.map((value) => {
          if (id === value.id) {
            return (
              <>
                <div className="row" style={{ paddingBottom: "60px" }}>
                  <div className="col-lg-5">
                    <img
                      style={{ width: "70%" }}
                      src={ process.env.PUBLIC_URL+"/images/" + value.image + ".png"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7">
                    <h2 style={{ color: "orangered" }}>{value.title}</h2>
                    <h5>
                      giá:{" "}
                      <h2 style={{ display: "inline", color: "chartreuse" }}>
                        {value.price} <small>$ </small>
                      </h2>
                      / year
                    </h5>
                    <p>{value.content}</p>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => {
                        HandlePush("management/order", pushOrderService);
                      }}
                    >
                      Mua Ngay
                    </button>
                    <p style={{ color: "#ff210a", marginTop: "15px" }}>
                      ĐỂ LẠI SỐ ĐIỆN THOẠI, CHÚNG TÔI SẼ TƯ VẤN SAU 5-10 PHÚT
                    </p>
                    <input type="text" />
                    <button type="button" class="btn btn-info">
                      GỌI LẠI CHO TÔI
                    </button>
                  </div>
                  <div className="col-lg-12" style={{ marginTop: "50px" }}>
                    <div style={{ borderBottom: "1px solid #ff800b" }}>
                      <span
                        style={{
                          backgroundColor: "#ff800b",
                          display: "inline-block",
                          padding: "10px",
                          color: "white",
                          height: "50px",
                        }}
                      >
                        Thông Tin Cá Nhân
                      </span>
                    </div>
                    <form
                      className="form-horizontal"
                      style={{ paddingTop: "20px" }}
                    >
                      <fieldset>
                        {/* Form Name */}
                        {/* Text input*/}
                        <div className="form-group">
                          <label
                            className="col-md-4 control-label"
                            htmlFor="textinput"
                          >
                            Tên Khách Hàng
                          </label>
                          <div className="col-md-4">
                            <input
                              id="textinput"
                              name="name"
                              type="text"
                              placeholder="Nguyễn Văn A"
                              className="form-control input-md"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                          <label
                            className="col-md-4 control-label"
                            htmlFor="textinput"
                          >
                            Số Điện Thoại
                          </label>
                          <div className="col-md-4">
                            <input
                              id="textinput"
                              name="phone"
                              type="text"
                              placeholder="0123456789"
                              className="form-control input-md"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                          <label
                            className="col-md-4 control-label"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <div className="col-md-4">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="nguyenvana@gmail.com"
                              className="form-control input-md"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div style={{ borderBottom: "1px solid #ff800b" }}>
                      <span
                        style={{
                          backgroundColor: "#ff800b",
                          display: "inline-block",
                          padding: "10px",
                          color: "white",
                          height: "50px",
                        }}
                      >
                        Chi Tiết Sản Phẩm
                      </span>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <h6>Mô tả</h6>
                        <ul>
                          {value.listitem.map((value) => {
                            return <li>{value}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{ backgroundColor: "#b4efa0", borderRadius: "30px" }}
              >
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id="exampleModalLabel"
                    style={{ color: "green" }}
                  >
                    success
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <h5>
                    You have successfully ordered your{" "}
                    <h4 style={{ display: "inline", color: "green" }}>
                      {pushOrderService.service.title}
                    </h4>{" "}
                    product
                  </h5>
                  <p>
                    thank{" "}
                    <h5 style={{ display: "inline", color: "green" }}>
                      {pushOrderService.name}
                    </h5>{" "}
                    for your trust
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmService.propTypes = {};

export default ConfirmService;
