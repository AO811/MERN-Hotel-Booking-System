const express = require("express");
const mongoose = require("mongoose");
const userRoute = express.Router();
const bcrypt = require('bcryptjs');
const {deleteuser, getAllUser, login, register, updateUser} = require("../controller/user");

userRoute.post('/AddUser',register);
userRoute.get('/',getAllUser);
userRoute.put('/UpdateUser/:id',updateUser);
userRoute.delete('/DeleteUser/:id',deleteuser);
userRoute.get('/Login',login);

module.exports = userRoute;