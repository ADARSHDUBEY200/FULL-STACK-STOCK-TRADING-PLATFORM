const {model}=require("mongoose");
const bcrypt=require("bcrypt")

const {userSchema}=require("../schemas/UserSchema");

const User = new model("User", userSchema);
module.exports = {User};


