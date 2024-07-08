import express from 'express';
const mongoose = require("mongoose");
const User = require("../model/userSchema");
const userRoute = express.Router();

import bcrypt from 'bcrypt.js';
import { createError } from "../utilities/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
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

export const deleteuser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    }
    catch (error) {
        next(error);
    }
}

export const login = async(req, res, next)=>{
    const name = await req.body.name;
    const password = await req.body.password;
    try{

    }
    catch{
        
    }
}