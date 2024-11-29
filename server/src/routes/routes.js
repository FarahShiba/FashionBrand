const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");

module.exports = () => {
  // Test GET Route
  router.get("/", (req, res, next) => {
    res.send("Welcome to My Fashion App!");
  });

  //subRoutes
  //auth routes
  router.use("/auth", authRoutes());
  //product routes
  router.use("/products", productRoutes());

  return router;
};
