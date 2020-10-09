import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HandlePush,
  HandleDeleteItem,
  HandleSet,
  HandleConnectFirebase,
} from "../../../function/HandleData";
const ServiceManagement = (props) => {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    const func = (e) => {
      const object = {
        id: e.key,
        name: e.val().name,
        email: e.val().email,
        phone: e.val().phone,
        service: e.val().service,
      };
      return object;
    };
    HandleConnectFirebase("management/order", func, setServiceDetail);
  }, []);
  return (
    <div className="container py-5">
      <div className="row" style={{ paddingTop: "92px" }}>
        <div className="col-lg-12 text-center mb-5">
          <div className="block-heading-1">
            <h2>Service Management</h2>
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
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Dịch vụ</th>
              <th scope="col">Giá</th>
            </tr>
          </thead>
          <tbody>
            {serviceDetail.map((value, key) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{value.name}</td>
                  <td>{value.phone}</td>
                  <td>{value.email}</td>
                  <td>{value.service.title}</td>
                  <td>{value.service.price} $</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ServiceManagement.propTypes = {};

export default ServiceManagement;
