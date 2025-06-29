const mongoose = require("mongoose");
const {WatchListSchema} = require("../schemas/WatchListSchema");

const WatchListModel = new mongoose.model("watchlist", WatchListSchema);

module.exports = {WatchListModel};