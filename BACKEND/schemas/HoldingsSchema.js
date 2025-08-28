const { Schema } = require("mongoose");
const {User} = require("../model/UserModel.js")

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  user : {
    type : Schema.Types.ObjectId,
    ref : "User"
  }
   
});

module.exports = { HoldingsSchema };