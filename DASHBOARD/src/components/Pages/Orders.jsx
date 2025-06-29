import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await axios.get("http://localhost:3000/newOrder");
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
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td style={{fontSize : "1rem", color: "green"}}>{stock.mode}</td>
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