const {model}=require("mongoose");


const {userSchema}=require("../schemas/UserSchema");

const User = new model("User", userSchema);
module.exports = {User};


