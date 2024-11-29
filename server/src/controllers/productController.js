const { db } = require("../config/db");
const ApiError = require("../utilities/ApiError");
const {
  storageBucketUpload,
  deleteFileFromBucket,
  getFileFromUrl,
} = require("../utilities/bucketServices");

module.exports = {
  // [1A] GET ALL Products
  async getAllProducts(req, res, next) {
    try {
      // Reference products collection in Firestore
      const productRef = db.collection("products");
      const snapshot = await productRef
        // .where("isAvailable", "==", "true")
        .where("isAvailable", "==", true)
        .orderBy("name", "asc")
        .get();

      // [400 ERROR] If no products found
      // if (snapshot.empty) {
      //   return next(
      //     ApiError.badRequest("The items you were looking for do not exist")
      //   );

      if (snapshot.empty) {
        res.status(200).send([]);

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            brand: doc.data().brand,
            color: doc.data().color,
            category: doc.data().category,
            price: doc.data().price,
            size: doc.data().size,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }
    } catch (err) {
      return next(
        ApiError.internal("The items selected could not be found", err)
      );
    }
  },

  // [1B] GET onSale Products
  async getOnSaleProducts(req, res, next) {
    try {
      const productRef = db.collection("products");
      const snapshot = await productRef
        .where("onSale", "==", true)
        .orderBy("name", "asc")
        .limit(10)
        .get();

      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            category: doc.data().category,
            price: doc.data().price,
            size: doc.data().size,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }
    } catch (err) {
      return next(
        ApiError.internal("The items selected could not be found", err)
      );
    }
  },

  // [2] POST Product
  async postProduct(req, res, next) {
    // console.log(req.body);
    // console.log(req.files);
    // console.log(req.locals);

    if (req.body) console.log("Request body:", req.body);
    if (req.files) console.log("Uploaded files:", req.files);
    if (res.locals) console.log("Response locals:", res.locals);

    // File upload to storage bucket
    let downloadURL = null;
    try {
      const filename = res.locals.filename;
      downloadURL = await storageBucketUpload(filename);
    } catch (err) {
      return next(
        ApiError.internal(
          "An error occurred in uploading the image to storage",
          err
        )
      );
    }

    try {
      const productRef = db.collection("products");
      const response = await productRef.add({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        price: Number(req.body.price),
        size: req.body.size,
        color: req.body.color,
        // onSale: req.body.onSale.toString(),
        onSale: req.body.onSale === "true",
        // isAvailable: req.body.isAvailable.toString(),
        isAvailable: req.body.isAvailable === "true",
        image: downloadURL,
      });
      console.log(`Added Product ID: ${response.id}`);
      res.send(response.id);
    } catch (err) {
      return next(
        ApiError.internal("Your request could not be saved at this time", err)
      );
    }
  },

  // [3] GET Product BY ID
  async getProductById(req, res, next) {
    // console.log(req.params.id);
    if (req.params.id) console.log("Product ID:", req.params.id);

    try {
      const productRef = db.collection("products").doc(req.params.id);
      const doc = await productRef.get();

      if (!doc.exists) {
        return next(
          ApiError.badRequest("The item you were looking for does not exist")
        );
      } else {
        res.send(doc.data());
      }
    } catch (err) {
      return next(
        ApiError.internal(
          "Your request could not be processed at this time",
          err
        )
      );
    }
  },

  // [4] PUT Product BY ID (Update)
  async putProductById(req, res, next) {
    // console.log(req.files);
    // console.log(res.locals.filename);
    // console.log(req.params);

    if (req.files) console.log("Files in request:", req.files);
    if (res.locals.filename)
      console.log("Filename in locals:", res.locals.filename);
    if (req.params) console.log(req.params);

    let downloadURL = null;
    try {
      if (req.files) {
        const filename = res.locals.filename;
        downloadURL = await storageBucketUpload(filename);

        // Delete old image from storage if new image is uploaded
        if (req.body.uploadedFile) {
          console.log(
            `Deleting old image in storage: ${req.body.uploadedFile}`
          );
          const bucketResponse = await deleteFileFromBucket(
            req.body.uploadedFile
          );
        }
      } else {
        console.log("No change to image in Storage Bucket");
        downloadURL = req.body.image;
      }
    } catch (err) {
      return next(
        ApiError.internal("An error occurred in uploading your image", err)
      );
    }

    try {
      const productRef = db.collection("products").doc(req.params.id);
      const response = await productRef.update({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        price: Number(req.body.price),
        size: req.body.size,
        color: req.body.color,
        // onSale: req.body.onSale.toString(),
        onSale: req.body.onSale === "true",
        // isAvailable: req.body.isAvailable.toString(),
        isAvailable: req.body.isAvailable === "true",
        image: downloadURL,
      });
      res.send(response);
    } catch (err) {
      return next(
        ApiError.internal(
          "Your request could not be processed at this time",
          err
        )
      );
    }
  },

  // [5] DELETE Product BY ID
  async deleteProductById(req, res, next) {
    try {
      // (a) Delete document image file from storage
      const productRef = db.collection("products").doc(req.params.id);
      const doc = await productRef.get();

      if (!doc.exists) {
        return next(
          ApiError.badRequest("The item you were looking for does not exist")
        );
      }
      const downloadURL = doc.data().image;
      const uploadedFile = getFileFromUrl(downloadURL);

      const bucketResponse = await deleteFileFromBucket(uploadedFile);

      if (bucketResponse) {
        // Call DELETE method with a precondition to ensure document exists
        const response = await productRef.delete({ exists: true });
        res.send({ message: "Product successfully deleted", data: response });
      } else {
        throw new Error("Failed to delete file from storage bucket");
      }
    } catch (err) {
      return next(
        ApiError.internal("An error occurred while deleting the product", err)
      );
    }
  },
};
