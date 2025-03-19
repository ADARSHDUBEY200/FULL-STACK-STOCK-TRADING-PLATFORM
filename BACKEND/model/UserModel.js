const {model}=require("mongoose");
const bcrypt=require("bcrypt")

const {userSchema}=require("../schemas/UserSchema");

userSchema.pre("save",async ()=>{
    this.password = await bcrypt.hash(this.password, 12);

});

module.exports = new model("User", userSchema);


