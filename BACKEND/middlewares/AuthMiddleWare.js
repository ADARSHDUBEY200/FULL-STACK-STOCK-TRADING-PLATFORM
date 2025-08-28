const jwt = require("jsonwebtoken");
require("dotenv").config();
const {User} = require("../model/UserModel");

const userVerification = (req, res)=>{
    let token = req.headers.authorization;

    console.log(token);

    if(!token || !token.startsWith("Bearer ")){
        console.log("Saurs ii chal gaya ")
      return  res.json({message:"Token is invalid", success : false});
    }

     token = token.split(" ")[1]; // Correct extraction

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {

        if (err) {
            console.log(err)
            return res.json({ success: false })
           
        } else {
            const user = await User.findById(data.id);
            console.log(user);
            if (user) {
                console.log("This is going to be run  2")
                return res.json({message : "User is logged in", success: true, user: user.username })
            }
            else {
                console.log("This is going to be run")
                return res.json({message : "User is not logged in", success: false })
            }
        }

    });
}

module.exports = {userVerification};