import express from "express";

const authRoute = express.Router();

authRouter.get('/checkauthentication',verify,(req,res,next)=>{
    console.log(req);
    res.send("You are authenticated");
})

export default Router;