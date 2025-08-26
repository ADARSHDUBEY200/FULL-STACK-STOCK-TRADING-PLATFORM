const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { HoldingsModel } = require("../model/HoldingsModel.js");
const { PositionsModel } = require("../model/PositionsModel.js");
const { OrdersModel } = require("../model/OrdersModel.js");
const { WatchListModel } = require("../model/WatchListModel.js");
const { User } = require("../model/UserModel.js");

const WatchList = async (req, res) => {
  let allWatchList = await WatchListModel.find({});
  res.json(allWatchList);
}

const Holdings = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  let allHoldings = await HoldingsModel.find({ user: decode.id });
  res.json(allHoldings);
};

const HoldingSave = async (req, res) => {
  const { watchlistId, token } = req.body;
  const result = await WatchListModel.findById(watchlistId);
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await User.findById(decode.id);

  const { name, qty, avg, price, net, day, } = result;
  const newHolding = new HoldingsModel({
    name,
    qty,
    avg,
    price,
    net,
    day
  });

  newHolding.user = user;

  const value = await newHolding.save()
  console.log(value);

  res.status(200).json({ message: "Holdings Data is saved" });

}

const HoldingDelete = async (req, res) => {
  const { id } = req.params;
  const result = await HoldingsModel.findByIdAndDelete(id);
  const populateResult = await result.populate("user");
  const userId = populateResult.user._id;
  const Holdings = await HoldingsModel.find({ user: userId });
  return res.status(200).json(Holdings);
}

const Positions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};


const NewOrder = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  const allOrders = await OrdersModel.find({ user: decode.id });
  return res.status(200).json(allOrders);
}

const NewOrderSave = async (req, res) => {

  const token = req.body.token;
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await User.findById(decode.id);

  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.user = user;

  console.log("The NewOrdersSave Method is called")

  await newOrder.save();

  return res.status(200).json({ message: "Data is saved" })


};

module.exports = { WatchList, Holdings, HoldingSave, Positions, NewOrder, NewOrderSave, HoldingDelete };