const express = require("express");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const Login = async (req, res) => {
    const { email, password } = req.body;

    try {

        if(!email || !password){
            return res.status(400).json({message : "All fields are required " , success : false})
        }

        let user = await User.findOne({ email });

        if (!user) {
           return  res.status(400).json({ message: "Invalid username password" , success : false});
        }

        let result = await bcrypt.compare(password, user.password);

        if (!result) {
            return res.status(404).json({ message: "Invalid username and the password" , success : false})
        }

        let token = jwt.sign({id : user._id}, process.env.TOKEN_KEY, {
            expiresIn: 3 * 24 * 60 * 60,
        });

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(200).json({message : "User Signed in succesfully" , success : true, token: token})


    } catch (error) {

        res.status(400).json({ message: "Something went wrong" });
        console.log("Something is wronmg during the Login : " + error)

    }
}

const Signup = async (req,res)=>{

    const {email ,username ,  password ,created_At} = req.body;

    try {

        let user = await User.findOne({email});

        if(user){
           return  res.status(200).json({message : "User already exists " , success : false})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        

        const newUser = new User({
            email,
            username,
            password : hashedPassword,
            created_At
        })

        await newUser.save();

        const token = jwt.sign({id : newUser._id}, process.env.TOKEN_KEY, {
            expiresIn : 3 * 24 * 60 * 60
        });

        res.cookie("token" , token , {
            withCredentials : true ,
            httpOnly : false
        });

        res.status(200).json({message : "User Succesfully registered" , success : true, token : token});

    } catch (error) {

        res.status(500).json({message : "Something wrong during the Signup "})
        console.log(error);
    }
}

module.exports = {Signup,Login};
