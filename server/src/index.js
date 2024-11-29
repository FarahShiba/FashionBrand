//import modules
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const cors = require("cors");
// const uuid = require("uuid");
//testing import
const { dbPing } = require("./config/db");
const corsOptions = require("./config/corsOption");
//import custom middleware
const apiErrorHandler = require("./middleware/apiErrorHandler");
const ApiError = require("./utilities/ApiError");

//import routes
const routes = require("./routes/routes");
const config = require("./config/config");

//init express app instance
const app = express();

// HTTP Header-setter security & CORS
app.use(helmet());
app.use(cors(corsOptions));

//access express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// //dev request middleware
// app.use(morgan("dev"));

// Custom Morgan Logging

app.use(
  morgan((tokens, req, res) => {
    const crudType = ["POST", "PUT", "DELETE"].includes(req.method)
      ? "write"
      : "read";

    console.log(
      `app:${crudType} ${tokens.method(req, res)} ${tokens.url(
        req,
        res
      )} ${tokens.status(req, res)} ${tokens["response-time"](req, res)} ms`
    );

    return null;
  })
);

// *NEW* - File parsing middleware
app.use(fileUpload({ createParentPath: true }));

//home route
app.use("/api", routes());

//not found route (404)
app.use((req, res, next) => {
  next(ApiError.notFound());
});

//call the error handler middleware catch all
app.use(apiErrorHandler);

//PORT Listener
// Ping DB & Set Port
if (config.env === "development") {
  // SETTING: DEVELOPMENT
  dbPing.then(() => {
    app.listen(config.port, () =>
      console.log(`Development Server is running on port: ${config.port}`)
    );
  });
} else {
  // SETTING: PREVIEW/PRODUCTION
  app.listen(config.port, () =>
    console.log(`Production Server is running on port: ${config.port}`)
  );
}

// dbPing.then(() => {
//   app.listen(config.port, () =>
//     console.log(`Server is running on port: ${config.port}`)
//   );
// });

// const PORT = config.port;
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
