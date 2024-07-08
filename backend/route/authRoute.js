const express = require("express");
const authRoute = express.Router();

authRoute.get('/checkauthentication',(req,res,next)=>{
    console.log(req);
    res.send("You are authenticated");
})

module.exports = authRoute;