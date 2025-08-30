const express = require("express");
const { register, login } = require("../controllers/auth"); // import controller
const authRoute = express.Router();

// Register user
authRoute.post("/register", register);

// Login user
authRoute.post("/login", login);

// Test authentication (optional)
authRoute.get("/checkauthentication", (req, res) => {
  res.send("You are authenticated");
});

module.exports = authRoute;
