import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const request = async () => {
      const result = await axios.get("http://localhost:3000/newOrder", { headers: {Authorization: `Bearer ${token}`}});
      setOrders(result.data);
      console.log(orders);
    }
    request();
  }, [])
  return (
    <div className="orders">

      <h3 className="title">ORDERS ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((stock, index) => {
              const styles = stock.mode == "BUY" ? {fontSize : "1rem", color: "green"} : {fontSize : "1rem", color: "RED"}
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td style={styles}>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>


      </div>

      <div className="no-orders">
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>

    </div>
  );
};

export default Orders;