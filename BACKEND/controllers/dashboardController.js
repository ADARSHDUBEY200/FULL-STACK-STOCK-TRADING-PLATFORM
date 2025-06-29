const express = require("express");
const { HoldingsModel } = require("../model/HoldingsModel.js");
const { PositionsModel } = require("../model/PositionsModel.js");
const { OrdersModel } = require("../model/OrdersModel.js");
const { WatchListModel } = require("../model/WatchListModel.js");

const WatchList = async (req, res) => {
  let allWatchList = await WatchListModel.find({});
  res.json(allWatchList);
}

const Holdings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};

const HoldingSave = async (req, res) => {
  const { watchlistId } = req.body;
  const result = await WatchListModel.findById(watchlistId);
  console.log(result);
  console.log("The HoldingsSave Method is called ")

  const { name, qty, avg, price, net, day, } = result;
  const newHolding = new HoldingsModel({
    name,
    qty,
    avg,
    price,
    net,
    day
  });

  const value = await newHolding.save()
  console.log(value);

  res.status(200).json({message : "Holdings Data is saved"});

}

const Positions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};


const NewOrder = async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
}

const NewOrderSave = async (req, res) => {

  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  console.log("The NewOrdersSave Method is called")

  await newOrder.save();

  return res.status(200).json({message : "Data is saved"})


};

module.exports = { WatchList, Holdings, HoldingSave, Positions, NewOrder,NewOrderSave };