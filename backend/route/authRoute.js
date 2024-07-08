const express = require("express");
const authRoute = express.Router();

authRouter.get('/checkauthentication',verify,(req,res,next)=>{
    console.log(req);
    res.send("You are authenticated");
})

module.exports = Router;