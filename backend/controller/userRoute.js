import express from 'express';
const mongoose = require("mongoose");
const userSchema = require("../model/userSchema");
const userRoute = express.Router();

import bcrypt from 'bcrypt.js';
import { createError } from "../utilities/error.js";
import jwt from "jsonwebtoken";

// Router.post('/AddUser',register);
userRoute.post("/AddUser", (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            name: req.body.fullname,
            email: req.body.email,
            password: hash
        });
        const savedUser = newUser.save();
        if (savedUser != null) {
            res.status(200).json("User has been added");
        }

    } catch (error) {
        next(error);
    }
})

Router.get('/', getAllUser);
// Router.put('/UpdateUser/:id', verifyUser, updateUser);
userRoute.put("/UpdateUser",(req,res)=>{
    userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json(updatedUser),
    (err, data) => {
        if (err)
            return err
        else
            res.json(data)
    }

})
// Router.delete('/DeleteUser/:id', verifyUser, deleteuser);
userRoute.delete("/DeleteUser",(req,res)=>{
    userSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        res.status(200).json('user has been deleted'),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        })
})
// Router.get('/Login', login);
userRoute.get("/Login",(req,res)=>{
    const name= req.body.name;
    const pwd= req.body.password;
    try {
        // bcrypt.compare(password);
        const user= userSchema.findOne({name:name});
        console.log(user);
        if(!user){
            return next(createError(404,"user not found"));
        }
        const ispasswordcorrect= bcrypt.compare(pwd,user.password);
        if(!ispasswordcorrect) return next(createError(400,"Password or Username is not correct"));
        const { password,...otherDetails }=user._doc;
        //creating jwt 
        const token=jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRETKEY);
        res
        .cookie("accessToken",token,{
            httpOnly:true
        })
        .status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
})