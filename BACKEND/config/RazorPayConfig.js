const Razorpay = require('razorpay');
require("dotenv").config();


let instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

module.exports = {instance};