const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = express.Router();

const { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } = require("../controller/booking");

bookingRoute.post('/createRoom/:id',createRoom)  
bookingRoute.put('/UpdateRoom/',updateRoom)
bookingRoute.delete('/DeleteRoom/',deleteRoom)
bookingRoute.get("/GetRoom/",getRoomById)
bookingRoute.get("/",getAllRooms)

module.exports = bookingRoute;
