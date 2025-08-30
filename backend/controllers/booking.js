const Booking = require("../models/bookingSchema");

// Create booking
exports.createRoom = async (req, res, next) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    next(error);
  }
};

// Delete booking
exports.deleteRoom = async (req, res, next) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Get all bookings
exports.getAllRooms = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    if (!bookings.length) return res.status(404).json({ message: "No bookings found" });
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Get single booking
exports.getRoomById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

// Update booking
exports.updateRoom = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json(updatedBooking);
  } catch (error) {
    next(error);
  }
};
