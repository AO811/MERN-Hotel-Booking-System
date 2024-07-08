const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userSchema");
// const userRoute = express.Router();

const bcrypt = require('bcrypt');
const { createError } = require("../utilities/error.js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        const savedUser = await newUser.save();
        if (savedUser != null) {
            res.status(200).json("User has been added");
        }

    }
    catch (error) {
        next(error);
    }
}

exports.deleteuser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    }
    catch (error) {
        next(error);
    }
}

exports.login = async(req, res, next)=>{
    const name = await req.body.name;
    const password = await req.body.password;
    try{
        const user= await User.findOne({name:name});
        console.log(user)
        if(!user){
            return next(createError(404,"user not found"));
        }
        const ispasswordcorrect=await bcrypt.compare(pwd,user.password);
        if(!ispasswordcorrect){ 
            return next(createError(400,"Password or Username is not correct"));
        }    
        const { password,...otherDetails }=user._doc;
        const token=jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRETKEY);
        res
        .cookie("accessToken",token,{
            httpOnly:true
        })
        .status(200).json({...otherDetails});
    }
    catch (error) {
        next(error);
    }
}

exports.updateUser=async(req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
exports.getAllUser=async(req,res,next)=>{
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}