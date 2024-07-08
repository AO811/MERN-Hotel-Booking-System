import express from 'express'
const mongoose = require("mongoose");
const bookingRoute = express.Router();


bookingRoute.post('/AddRoom/:hotelid',createRoom)  
bookingRoute.put('/UpdateRoom/:id',updateRoom)
bookingRoute.delete('/DeleteRoom/:id/:hotelid',deleteRoom)
bookingRoute.get("/GetRoom/:id",getRoomById)
bookingRoute.get("/",getAllRooms)

export default bookingRoute;
