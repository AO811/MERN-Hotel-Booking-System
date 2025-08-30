const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] }, // removed unique
  phone: { type: String, required: true },
  roomtype: {type: String, required: true, enum: ["Single", "Double", "Suite"] },
  checkindate: { type: Date, required: true },
  checkoutdate: { type: Date, required: true, validate: {
    validator: function(value) {
      return value > this.checkindate;
    },
    message: "Checkout date must be after check-in date"
  }},
  adhaar: { type: String, required: true }
}, {
  collection: "bookings", 
  timestamps: true, 
});

module.exports = mongoose.model("Booking", bookingSchema);
