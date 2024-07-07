const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://CRUD:abasaksr@cluster0.sfek0t7.mongodb.net/hotelbookingdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));

const db = mongoose.connection;
db.on("open", () => console.log("Database connection opened"));
db.on("error", (error) => console.error("Database connection error:", error));

// Routes
// Uncomment and correctly set up your route handlers
const userRoute = require("./controller/userRoute");
app.use("/userRoute", userRoute);
const bookingRoute = require("./controller/bookingRoute");
app.use("/bookingRoute", bookingRoute);

// Server Listening
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
