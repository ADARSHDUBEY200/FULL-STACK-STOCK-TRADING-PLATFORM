const express = require("express")
const router = express.Router();
const {Signup,Login} = require("../controllers/userController.js")
const { userVerification } = require("../middlewares/AuthMiddleWare.js")

router.post("/", userVerification)
router.post("/signup",Signup);
router.post("/login", Login);

module.exports = router;