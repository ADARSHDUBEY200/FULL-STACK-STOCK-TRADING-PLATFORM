const express = require("express")
const router = express.Router();
const {Holdings,Positions,NewOrder, NewOrderSave, WatchList, HoldingSave} = require("../controllers/dashboardController.js")

router.get("/watchlist",WatchList )
router.get("/holdings",Holdings);
router.post("/holdings",HoldingSave)
router.get("/positions",Positions);
router.get("/newOrder",NewOrder)
router.post("/newOrder",NewOrderSave);

module.exports = router;
