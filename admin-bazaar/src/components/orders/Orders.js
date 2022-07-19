import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Аты</th>
          <th scope="col">Email</th>
          <th scope="col">Жалпы</th>
          <th scope="col">Төлөм</th>
          <th scope="col">Дата</th>
          <th>Статус</th>
          <th scope="col" className="text-end">
            Толук
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>{order.totalPrice} сом</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  {moment(order.paidAt).format("MMM DD YYYY")} төлөндү
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Төлөнгөн жок
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM DD YYYY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Жеткирилди</span>
              ) : (
                <span className="badge btn-dark">Жеткирилген жок</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
