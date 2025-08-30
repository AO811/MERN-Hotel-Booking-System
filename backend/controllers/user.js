const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userSchema.js");
const bcrypt = require("bcryptjs");
const { createError } = require("../utilities/error.js");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Hash password (if not already handled in schema)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json("User has been added");
  } catch (error) {
    if (error.code === 11000) {
      return next(createError(400, "User already exists"));
    }
    next(error);
  }
};

// DELETE USER
exports.deleteuser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

// LOGIN
exports.login = async (req, res, next) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ name }, { email: name }] });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(createError(400, "Password or Username is not correct"));
    }

    const { password: pwd, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRETKEY,
      { expiresIn: "1h" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(error);
  }
};

// UPDATE USER
exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// GET ALL USERS
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // always return array
  } catch (error) {
    next(error);
  }
};
