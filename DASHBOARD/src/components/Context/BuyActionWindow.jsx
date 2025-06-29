import React, { useContext, useState } from 'react'
import { GeneralContext } from './GeneralContext'
import "./BuyActionWindow.css"
import axios from "axios"

const BuyActionWindow = () => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0);


    const generalContext = useContext(GeneralContext);
    const watchlistId = generalContext.selectedStockID;
    console.log(watchlistId);
    console.log("Ye run kar raha hai")

    const handleBuyClick = async () => {
        try {
            await axios.post("http://localhost:3000/newOrder", {
                name: generalContext.selectedStockName,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY"
            });

            await axios.post("http://localhost:3000/holdings", { watchlistId })

            generalContext.handleCloseBuyWindow();


        } catch (error) {
            console.log("SomeThing Wrong in the BuyAction window is :", error.message);
        }

    }

    const handleCancelClick = () => {
        generalContext.handleCloseBuyWindow();

    }

    return (
        <div className="container" id="buy-window" draggable="true">
            <p>STOCK IS: {generalContext.selectedStockName}</p>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            value={stockQuantity}
                            onChange={(e) => { setStockQuantity(e.target.value) }}

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
                            onChange={(e) => { setStockPrice(e.target.value) }}


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