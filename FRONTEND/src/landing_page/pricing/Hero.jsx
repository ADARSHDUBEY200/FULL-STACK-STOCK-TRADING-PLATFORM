import React from 'react';


function Hero() {
    return ( 
        <div className="container text-center mt-5 ">
            <div className="container mt-5 mb-5">
                <h2>Pricing</h2>
                <h4>Free equity investments and flat ₹20 intraday and F&O trades</h4>
                <p></p>
            </div>
            <div className="row mt-5 border-top p-5">
                <div className="col ">
                    <img src="./public/media/images/pricingEquity.svg" alt=""  style={{width:"60%"}}/>
                </div>
                <div className="col">
                    <img src="./public/media/images/intradayTrades.svg" alt=""  style={{width:"60%"}}/>
                </div>
                <div className="col">
                    <img src="./public/media/images/pricingequity.svg" alt=""  style={{width:"60%"}}/>
                </div>
            </div>
           
        </div>
     );
}

export default Hero;
