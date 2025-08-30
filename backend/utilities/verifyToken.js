// verifyToken.js
const jwt = require("jsonwebtoken");
const { createError } = require("../utilities/error.js");

const verify = (req, res, next) => {
  let token = req.cookies?.accessToken || req.headers["authorization"];
  if (!token) return next(createError(401, "Not Authenticated"));

  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  jwt.verify(token, process.env.JWT_SECRET || "yoursecretkey", (err, decoded) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.user = decoded;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verify(req, res, (err) => {
    if (err) return next(err);
    if (req.user.id === req.params.id) next();
    else next(createError(403, "Not authorized"));
  });
};

const verifyAdmin = (req, res, next) => {
  verify(req, res, (err) => {
    if (err) return next(err);
    if (req.user.role === "admin") next();
    else next(createError(403, "Admin access only"));
  });
};

module.exports = { verify, verifyUser, verifyAdmin };
