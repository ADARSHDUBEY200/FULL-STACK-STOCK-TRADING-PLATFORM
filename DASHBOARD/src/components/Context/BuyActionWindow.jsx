import React, { useContext, useState } from 'react'
import { GeneralContext } from './GeneralContext'
import "./BuyActionWindow.css"
import axios from "axios"

const BuyActionWindow = () => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0);


    const generalContext = useContext(GeneralContext);
    const watchlistId = generalContext.selectedStockID;
    const token = localStorage.getItem("token");
    console.log(watchlistId);
    console.log("Ye run kar raha hai")

    const handleBuyClick = async () => {
        try {

            const response = await axios.get("http://localhost:3000/api/key");

            const data = await axios.post("http://localhost:3000/checkout", {
                amount: stockPrice
            });
            console.log(data);
            console.log(response);

            var options = {
                "key": response.data.key, // Enter the Key ID generated from the Dashboard
                "amount": data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: async function (res) {
                    // 👇 This runs after successful payment
                    console.log("The handler is called");
                    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = res;

                    try {
                        // ✅ Now YOU call backend manually
                        const verifyRes = await axios.post("http://localhost:3000/paymentVerification", {
                            razorpay_payment_id,
                            razorpay_order_id,
                            razorpay_signature,
                        });

                        if (verifyRes.data.success) {
                            // Payment verified, now create order
                            await axios.post("http://localhost:3000/newOrder", {
                                name: generalContext.selectedStockName,
                                qty: stockQuantity,
                                price: stockPrice,
                                mode: "BUY",
                                token: token,
                            });

                            await axios.post("http://localhost:3000/holdings", { watchlistId, token });
                            generalContext.handleCloseBuyWindow();
                        } else {
                            console.error("❌ Payment verification failed");
                        }
                    } catch (err) {
                        console.error("Error verifying payment:", err.message);
                    }
                },

                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.open();


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