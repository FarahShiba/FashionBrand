const express = require("express");
const router = express.Router();

//import modules
const ProductPolicy = require("../policies/productPolicy");
const FilePolicy = require("../policies/filePolicy");
const verifyAuth = require("../middleware/verifyAuth");
const fileServerUpload = require("../middleware/fileServerUpload");
const productController = require("../controllers/productController");

module.exports = () => {
  // GET ALL Products
  router.get("/", productController.getAllProducts);

  // GET onSALE Products
  router.get("/onSale", productController.getOnSaleProducts);

  // POST Product
  router.post(
    "/",
    [
      ProductPolicy.validateProduct,
      FilePolicy.filesPayloadExists,
      FilePolicy.fileSizeLimiter,
      FilePolicy.fileExtLimiter([".jpg", ".png", ".jpeg", ".gif"]),
      verifyAuth.auth,
      fileServerUpload,
    ],
    productController.postProduct
  );

  // GET BY ID Product
  router.get("/:id", productController.getProductById);

  // UPDATE BY ID Product
  router.put(
    "/:id",
    [
      ProductPolicy.validateProduct,
      FilePolicy.filesPayloadExists,
      FilePolicy.fileSizeLimiter,
      FilePolicy.fileExtLimiter([".jpg", ".png", ".jpeg", ".gif"]),
      verifyAuth.auth,
      fileServerUpload,
    ],
    productController.putProductById
  );

  // DELETE BY ID Product
  router.delete(
    "/:id",
    [verifyAuth.auth, verifyAuth.admin],
    productController.deleteProductById
  );

  return router;
};
