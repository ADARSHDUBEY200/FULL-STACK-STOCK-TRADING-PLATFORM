const { instance } = require("../config/RazorPayConfig.js");
const crypto = require("crypto");

const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    }

    const order = await instance.orders.create(options);
    return res.status(201).json(order);
}

const paymentVerification = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    console.log(process.env.KEY_SECRET);

    var expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET).update(body.toString()).digest('hex');

    let isAuthenticate = expectedSignature === razorpay_signature

    if(isAuthenticate) {
        return res.status(200).json({success : true});
    }else{
        return res.status(200).json({success : false});
    }

}


module.exports = { checkout, paymentVerification };

