class ApiError {
  constructor(code, message, err) {
    this.code = code;
    this.message = message;
    this.err = err;
  }

  static badRequest(msg) {
    return new ApiError(400, `Bad Request: ${msg}`);
  }

  // [403] Forbidden
  static forbidden(msg) {
    return new ApiError(403, `Forbidden: ${msg}`);
  }

  // [404] Not Found
  // PARAMETERS: Takes no arguments as it's a static error (only ever going to give one message!)
  static notFound() {
    return new ApiError(404, "Resource Not Found");
  }

  // [500] Internal Server Error
  static internal(msg, err) {
    console.error(err);
    return new ApiError(500, `Internal Server Error: ${msg}`);
  }
}

module.exports = ApiError;
