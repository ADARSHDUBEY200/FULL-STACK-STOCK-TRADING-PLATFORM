require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRouter.js");
const dashBoardroute = require("./routes/dashboardRouter.js");
const paymentRoute = require("./routes/paymentRoutes.js");



const PORT = process.env.port || 3000;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/",userRoute);
app.use("/",dashBoardroute);
app.use("/",paymentRoute);

// app.get("/Delete", async (req, res) => {
//   const result = await HoldingsModel.deleteMany({});
//   console.log(result);
//   res.send("Deleted");
// })


app.get("/api/key", (req, res)=>{
  return res.status(201).json({key : process.env.KEY_ID});
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