const {model}=require("mongoose");
const bcrypt=require("bcrypt")

const {userSchema}=require("../schemas/UserSchema");

module.exports = new model("User", userSchema);


