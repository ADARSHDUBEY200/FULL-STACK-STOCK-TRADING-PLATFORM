import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
// import { set } from "mongoose";

const Holdings = () => {
  const [allHoldings, setallHoldings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/holdings`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      console.log("This is the all holdings data", res.data);
      setallHoldings(res.data);
    })


  }, [])

  const handleSellClick = async (stock) => {
    console.log("The id after calling the sell button is : ", stock);
    await axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: stock.name,
      qty: stock.qty,
      price: stock.price,
      mode: "SELL",
      token: token
    });

    const response =  await axios.delete(`${import.meta.env.VITE_API_URL}/holdings/${stock._id}`);
    console.log(response);
    setallHoldings(response.data);
  }

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };




  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th style={{ textAlign: "center" }}>Sell</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                  <td><button onClick={() => handleSellClick(stock)} style={{ backgroundColor: " rgb(237, 101, 101)", color: "white", fontWeight: "bold", padding: "0.5rem 2rem 0.5rem 2rem", border: "none", borderRadius: "1rem" , cursor: "pointer"}}>sell</button></td>
                </tr>
              );

            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;