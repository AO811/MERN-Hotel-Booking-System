const express = require("express");
const mongoose = require("mongoose");
const userRoute = express.Router();
const bcrypt = require('bcryptjs');
const {deleteuser, getAllUser, login, register, updateUser} = require("../controller/user");

userRoute.post('/AddUser',register);
userRoute.get('/',getAllUser);
userRoute.put('/UpdateUser/:id',verifyUser,updateUser);
userRoute.delete('/DeleteUser/:id',verifyUser,deleteuser);
userRoute.get('/Login',login);

module.exports = userRoute;