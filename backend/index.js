const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();

const userRoute = require("./route/userRoute");
const bookingRoute = require("./route/bookingRoute");
const authRoute = require("./route/authRoute");
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://CRUD:abasaksr@cluster0.sfek0t7.mongodb.net/hotelbookingdb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))

app.use("/userRoute", userRoute);
app.use("/bookingRoute", bookingRoute);
app.use("/authRoute", authRoute);

app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})