import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { GeneralContext,GeneralContextProvider } from './GeneralContext'
import "./BuyActionWindow.css"
import axios from "axios"

const BuyActionWindow = ({uid}) => {
    const [stockQuantity,setStockQuantity]=useState(1);
    const [stockPrice,setStockPrice]=useState(0);


    const generalContext=useContext(GeneralContext);

    const handleBuyClick=(e)=>{
        axios.post("http://localhost:3002/newOrder",{
            name:uid,
            qty:stockQuantity,
            price:stockPrice,
            mode:"BUY"
        })

        generalContext.handleCloseBuyWindow();

        
    }
   

    const handleCancelClick=()=>{
        generalContext.handleCloseBuyWindow();

    }

    return (
        <div className="container" id="buy-window" draggable="true">
          <p>STOCK IS: {uid}</p>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            value={stockQuantity}
                            onChange={(e)=>{setStockQuantity(e.target.value)}}

                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            value={stockPrice}
                            onChange={(e)=>{setStockPrice(e.target.value)}}


                        />
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>
                        cancle
                    </button>
                </div>
            </div>
        </div>

    )
}

export default BuyActionWindow