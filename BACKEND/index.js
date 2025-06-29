require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRouter.js");
const dashBoardroute = require("./routes/dashboardRouter.js");
const {WatchListModel} = require("./model/WatchListModel.js");
const { HoldingsModel } = require("./model/HoldingsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");


const PORT = process.env.port || 3000;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

app.use("/",userRoute);
app.use("/",dashBoardroute);

app.get("/Delete", async (req, res) => {
  const result = await OrdersModel.deleteMany({});
  console.log(result);
  res.send("Deleted");
})

app.listen(PORT, async () => {
  console.log("APP IS STARTED");
  try {
    await mongoose.connect(url);
    console.log("DB is connected ");
  } catch (err) {
    console.error("DB IS NOT CONNECTED " + err)
  }

})