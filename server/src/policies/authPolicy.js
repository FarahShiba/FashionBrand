// Import Joi Validation module
const Joi = require("joi");
const ApiError = require("../utilities/ApiError");

module.exports = {
  // [1] AUTH POST Validation
  validateAuth(req, res, next) {
    console.log(req.body); // Logging the request body
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    // Validate the request body against the schema
    const { error, value } = schema.validate(req.body);

    // If validation fails, handle the error and pass it to the next middleware
    if (error) {
      console.log(error); // Logging the validation error
      switch (error.details[0].context.key) {
        case "username":
          next(ApiError.badRequest("You must provide a valid username"));
          break;

        case "email":
          next(ApiError.badRequest("You must provide a valid email"));
          break;

        case "password":
          console.log("Password error:", error);
          next(ApiError.badRequest("You must provide a valid password"));
          break;

        default:
          next(
            ApiError.badRequest(
              "Invalid Form Information - please check form information and submit again"
            )
          );
      }

      // If validation succeeds, pass to the next middleware
    } else {
      next();
    }
  },
};
