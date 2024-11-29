const ApiError = require("../utilities/ApiError");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    console.log("Access denied: No token provided");
    return next(ApiError.denyAccess("No token provided"));
  } else {
    token = token.substring(7);
    console.log(`Token received: ${token}`);
  }

  try {
    const decoded = jwt.verify(token, config.authentication.jwtSecret);
    req.user = decoded;
    console.log(`User credentials verified. Admin status: ${req.user.isAdmin}`);
    next();
  } catch (ex) {
    console.log("Token verification failed:", ex);
    return next(ApiError.denyAccess("Invalid token"));
  }
};

const admin = (req, res, next) => {
  if (!req.user || req.user.isAdmin !== true) {
    console.log(
      "Insufficient permissions. Admin status:",
      req.user ? req.user.isAdmin : "undefined"
    );
    return next(ApiError.forbidden("Insufficient permissions"));
  }
  console.log(
    `Administrative access granted. Admin status: ${req.user.isAdmin}`
  );
  next();
};

const verifyAuth = {
  auth,
  admin,
};

module.exports = verifyAuth;
