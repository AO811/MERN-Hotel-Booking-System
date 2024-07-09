const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = express.Router();

const { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } = require("../controller/booking");

bookingRoute.post('/createRoom/',createRoom)  
bookingRoute.put('/UpdateRoom/:id',updateRoom)
bookingRoute.delete('/DeleteRoom/',deleteRoom)
bookingRoute.get("/GetRoom/:id",getRoomById)
bookingRoute.get("/",getAllRooms)

module.exports = bookingRoute;
