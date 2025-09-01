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

    // Check duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createError(400, "User already exists"));

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json("User has been added");
  } catch (error) {
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
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ name: usernameOrEmail }, { email: usernameOrEmail }],
    });
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
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
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
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// GET ALL USERS
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
