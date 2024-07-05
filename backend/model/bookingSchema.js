const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": { type: Number, required: true },
    "roomtype": { type: String, required: true },
    "checkindate": { type: Date, required: true },
    "checkoutdate": { type: Date, required: true },
    "adhaar": { type: String, required: true }
},{
    collection: "booking"
})

module.exports = mongoose.model("bookingSchema", bookingSchema);