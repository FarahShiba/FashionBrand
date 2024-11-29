// DATABASE CONFIGURATION
// Imports of db admin modules (imports the admin libraries)
var admin = require("firebase-admin");
const config = require("./config");

try {
  console.log("Attempting database connection...");

  let serviceAccountKey;

  //different setups based on environment
  if (config.env === "development" || config.env === "production") {
    serviceAccountKey = config.db.google_account_credentials;
  } else if (config.env === "preview") {
    serviceAccountKey = {
      type: config.db.type,
      project_id: config.db.project_id,
      private_key_id: config.db.private_key_id,
      private_key: config.db.private_key,
      client_email: config.db.client_email,
      client_id: config.db.client_id,
      auth_uri: config.db.auth_uri,
      token_uri: config.db.token_uri,
      auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
      client_x509_cert_url: config.db.client_x509_cert_url,
      universe_domain: config.db.universe_domain,
    };
  }
  // console.log(serviceAccountKey);
  console.log("Service Account Key Loaded:", !!serviceAccountKey);

  // Imports of db credentials
  // var serviceAccountKey = require(config.db.serviceAccountKey);

  // Configure database with our credentials + storage bucket details (for file/image storing)
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  //   storageBucket: config.db.storageBucket,
  // });

  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucket,
  };

  admin.initializeApp(firebaseAppOptions);
  // Store core database functions in variable objects
  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // DB Ping function
  const dbPing = db.listCollections().then((collections) => {
    console.log("Connected to Cloud Firestore");
    for (let collection of collections) {
      console.log(`Found db collection: ${collection.id}`);
    }
  });

  // Export variable objects for use in our application
  module.exports = { db, bucket, dbPing };

  // Catch errors and log them to the console
} catch (err) {
  console.log(err);
}
