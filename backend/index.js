const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser()); // ✅ now after app is defined
app.use(morgan("dev"));

const databaseEnabled = process.env.DATABASE_ENABLED === "true";

if (databaseEnabled && !process.env.MONGO_URI) {
  throw new Error("DATABASE_ENABLED is true, but MONGO_URI is not configured.");
}

if (!databaseEnabled) {
  console.log("ℹ️ Database disabled. Set DATABASE_ENABLED=true to enable MongoDB.");
  app.use("/api", (req, res) => {
    res.status(503).json({ message: "API is unavailable while the database is disabled." });
  });
}

// Routes
const userRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const authRoute = require("./routes/authRoute");

app.use("/api/users", userRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/auth", authRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || "Something went wrong!" });
});

// MongoDB connection
if (databaseEnabled) {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
