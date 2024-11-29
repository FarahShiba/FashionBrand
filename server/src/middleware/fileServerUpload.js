const ApiError = require("../utilities/ApiError");
const path = require("path");
const fs = require("fs");

const fileServerUpload = (req, res, next) => {
  if (req.files) {
    // 1. STORE FILE
    const file = req.files.image;
    console.log(`Image for Server Processing: ${file.name}`);

    // 2. Generate unique filename
    const filename = Date.now() + "_" + file.name;
    console.log(`Unique Filename: ${filename}`);

    // 3. Construct upload path
    const uploadDir = path.join(__dirname, "../../public/uploads");
    const uploadPath = path.join(uploadDir, filename);

    // Ensure upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log("Uploads directory created");
    }

    console.log(`Resolved Absolute Path: ${path.resolve(uploadPath)}`);

    // 4. Move file to upload path
    file
      .mv(uploadPath)
      .then(() => {
        console.log(`Server Upload Successful: ${uploadPath}`);
        res.locals.filename = filename;
        next();
      })
      .catch((err) => {
        console.error("File upload error:", err); // Added detailed logging
        return next(
          ApiError.internal(
            "Your file request could not be processed at this time",
            err
          )
        );
      });
  } else {
    next();
  }
};

module.exports = fileServerUpload;
