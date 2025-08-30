const express = require("express");
const userRoute = express.Router();
const {deleteuser, getAllUser, login, register, updateUser} = require("../controllers/user");

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.get('/', getAllUser);
userRoute.put('/updateUser/:id', updateUser);
userRoute.delete('/deleteUser/:id', deleteuser);

module.exports = userRoute;