import React from "react";

function Hero() {
  return (
    <>
    
      <div className=" p-5 mt-3 row" id="supportWrapper" style={{backgroundColor:"#488bf0"}}>
        <h4 className=" col-6 text-center fw-bold text-white">Support Portal</h4>
        <a href=""  className="col-6 text-center" style={{textDecoration:"underline", fontWeight:"bold", color:"white"}}>Track Tickets</a>
      </div>
      <div className="row p-5 mb-3" style={{backgroundColor:"#488bf0"}}>
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-5 text-white">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="m-3" style={{padding:"10px 15rem", boxSizing:"border-box"}}/>
          <br />
          <a href="" className="text-white text-decoration-underline m-3 fw-bold">Track account opening</a>
          <a href="" className="text-white text-decoration-underline m-3 fw-bold">Track segment activation</a>
          <a href="" className="text-white text-decoration-underline m-3 fw-bold">Intraday margins</a>
          <a href="" className="text-white text-decoration-underline m-3 fw-bold">Kite user manual</a>
        </div>
        <div className="col-6 p-5 text-white ml-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" className="text-decoration-underline fw-bold text-white">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-decoration-underline fw-bold text-white">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
      </>
    
  );
}

export default Hero;