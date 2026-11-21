const express = require("express");
const userRoute = express.Router();
const {deleteuser, getAllUser, login, register, updateUser} = require("../controllers/user");
const { verifyUser } = require("../utilities/verifyToken");

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.get('/', getAllUser);
userRoute.put('/updateUser/:id', verifyUser, updateUser);
userRoute.delete('/deleteUser/:id', deleteuser);

module.exports = userRoute;