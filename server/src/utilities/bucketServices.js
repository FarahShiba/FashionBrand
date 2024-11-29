const { bucket } = require("../config/db");
const config = require("../config/config");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

module.exports = {
  async storageBucketUpload(filename) {
    // 1. GENERATE RANDOM UUID STORAGE TOKEN
    console.log(`Firestore File Name: ${filename}`);
    const storageToken = uuid.v4();

    // Use `path.resolve` to ensure we get an absolute path
    const serverFilePath = path.resolve(
      __dirname,
      "../../public/uploads",
      filename
    );
    console.log(
      `Resolved Absolute Path for Server File Path: ${serverFilePath}`
    );

    const options = {
      destination: filename,
      resumable: true,
      validation: "crc32c",
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken,
        },
      },
    };

    // OPTIONAL DEBUGGING: Checks if server-side /uploads file exists before BUCKET UPLOAD
    fs.access(serverFilePath, fs.F_OK, (err) => {
      if (err) {
        console.log("Error occurred in storing file to server:", err);
        return {
          message: "Error occurred in storing file to server",
        };
      } else {
        console.log("File Successfully Stored in Server");
      }
    });

    // 3. CLOUD FIRESTORE UPLOAD METHOD CALL
    const result = await bucket.upload(serverFilePath, options);
    const bucketName = result[0].metadata.bucket;
    console.log(`Bucket Name: ${bucketName}`);

    // 4. CONSTRUCT DOWNLOAD URL
    const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
    console.log(`File Successfully Uploaded to Storage Bucket: ${downloadURL}`);

    // 5. DELETE TEMPORARY FILE IN SERVER-SIDE UPLOADS
    fs.unlink(serverFilePath, (err) => {
      if (err) {
        console.log(
          "Error in removing file from temporary local storage:",
          err
        );
        return {
          message:
            "Error occurred in removing file from temporary local storage",
        };
      } else {
        console.log("File in temporary local storage deleted");
      }
    });

    return downloadURL;
  },

  getFileFromUrl(downloadURL) {
    console.log(`DownloadURL from DB: ${downloadURL}`);

    // Slice off the base URL from downloadURL
    const baseURL = `https://firebasestorage.googleapis.com/v0/b/${config.db.storageBucket}/o/`;
    let fileGlob = downloadURL.replace(baseURL, "");

    // Remove everything after the query string
    const indexOfEndPath = fileGlob.indexOf("?");
    fileGlob = fileGlob.substring(0, indexOfEndPath);

    // Return file glob to be deleted
    console.log(`File in Bucket for Deletion: ${fileGlob}`);
    return fileGlob;
  },

  async deleteFileFromBucket(uploadedFile) {
    // Determine File Location in Storage
    const file = bucket.file(uploadedFile);
    const fileChecker = await file.exists();

    // [400 ERROR] Check for Item Existing in Storage Bucket
    if (fileChecker[0] === false) {
      const options = {
        ignoreNotFound: true,
      };

      const data = await file.delete(options);
      console.log(
        `The file: ${uploadedFile}, does not exist in Storage. Please check server for inconsistent data handling & database queries.`
      );

      return data[0];
    } else {
      const data = await file.delete();
      console.log(`File deleted from Storage Bucket: ${uploadedFile}`);
      return data[0];
    }
  },
};
