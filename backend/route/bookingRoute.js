const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = express.Router();

import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from "../controller/booking"

bookingRoute.post('/AddRoom/:hotelid',createRoom)  
bookingRoute.put('/UpdateRoom/:id',updateRoom)
bookingRoute.delete('/DeleteRoom/:id/:hotelid',deleteRoom)
bookingRoute.get("/GetRoom/:id",getRoomById)
bookingRoute.get("/",getAllRooms)

module.exports = bookingRoute;
