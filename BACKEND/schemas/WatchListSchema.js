const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
  name: String,
  percent: String, 
  isDown: Boolean,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
   
});

module.exports = { WatchListSchema };