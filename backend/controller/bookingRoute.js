import express from 'express';
const mongoose = require("mongoose");
const bookingSchema = require("../model/bookingSchema.js")
const bookingRoute = express.Router();

// import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from '../controllers/room.js';

//create 
// Router.post('/AddRoom/:hotelid',createRoom)
bookingRoute.post("/CreateRoom",(req,res)=>{
    bookingRoute.create(req.body,(err,data) =>{
        if(err)
            return err;
        else
            res.json(data)
    })
})
//get by id
// Router.get("/GetRoom/:id",getRoomById)
bookingRoute.get("/GetRoom", (req, res) => {
    bookingSchema.findById(mongoose.Types.ObjectId(req.params.id)),
    (err, data) => {
        if (err)
            return err
        else
            res.json(data)
    }
})

//update
// Router.put('/UpdateRoom/:id',updateRoom)
bookingRoute.put("/UpdateRoom", (req,res) =>{
    bookingSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    { $set: req.body },
    (err, data) => {
        if (err)
            return err
        else
            res.json(data)
    })
})    
//delete
// Router.delete('/DeleteRoom/:id/:hotelid',deleteRoom)
bookingRoute.delete("/DeleteRoom", (req,res) =>{
    bookingSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

module.exports = bookingRoute;
export default Router;