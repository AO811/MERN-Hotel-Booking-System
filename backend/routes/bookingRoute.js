const express = require("express");
const bookingRoute = express.Router();

const { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } = require("../controllers/booking");
const { verify, verifyAdmin } = require("../utilities/verifyToken");

// RESTful routes
bookingRoute.post('/rooms', verifyAdmin, createRoom);
bookingRoute.put('/rooms/:id', verifyAdmin, updateRoom);
bookingRoute.delete('/rooms/:id', verifyAdmin, deleteRoom);
bookingRoute.get('/rooms/:id', verify, getRoomById);
bookingRoute.get('/rooms', verify, getAllRooms);

module.exports = bookingRoute;
