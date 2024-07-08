import express from 'express'
const mongoose = require("mongoose");
const userRoute = express.Router();


userRoute.post('/AddUser',register);
userRoute.get('/',getAllUser);
userRoute.put('/UpdateUser/:id',verifyUser,updateUser);
userRoute.delete('/DeleteUser/:id',verifyUser,deleteuser);
userRoute.get('/Login',login);

export default userRoute;