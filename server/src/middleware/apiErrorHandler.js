// ERROR HANDLING MIDDLEWARE
const ApiError = require("../utilities/ApiError");

function apiErrorHandler(err, req, res, next) {
  // E2(b) Middleware Checks if the Error is one of our Pre-Defined Methods (instanceof)
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;

    // E2(c) Middleware Catch-All: If it doesn't fall within a Pre-Defined Method, it passes to a General Error Message & Logs the Error Stack
  } else {
    console.error(err);
    res.status(500).json({
      message: "Oops! Something went wrong - Please try again later",
    });
  }
}

module.exports = apiErrorHandler;
