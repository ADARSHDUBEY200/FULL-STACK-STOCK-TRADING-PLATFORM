const {instance} = require("../config/RazorPayConfig.js");


const checkout = async (req, res)=>{
    const options = {
        amount:Number(req.body.amount * 100),
        currency : "INR",
    }

    const order = await instance.orders.create(options);
    return res.status(201).json(order);
}

const paymentVerification = async (req, res) =>{
    const {razorpay_payment_id, razorpay_order_id ,razorpay_signature} = req.body;
    console.log(req.body);
    console.log("This is the request body");

   return res.redirect("http://localhost:5174/home/holdings");
}


module.exports = {checkout,paymentVerification};