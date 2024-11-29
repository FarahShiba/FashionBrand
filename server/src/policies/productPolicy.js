const Joi = require("joi");
const ApiError = require("../utilities/ApiError");

module.exports = {
  // [1] POST/PUT Product Validation
  validateProduct(req, res, next) {
    console.log(req.body);
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      description: Joi.string().min(3).max(2000).required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
      size: Joi.string().min(3).max(50).required(),
      brand: Joi.string().min(3).max(50).required(),
      color: Joi.string().min(3).max(50).required(),
      onSale: Joi.boolean().required(),
      isAvailable: Joi.boolean().required(),
      image: Joi.any(),
      uploadedFile: Joi.string(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error.details[0]);
      switch (error.details[0].context.key) {
        case "name":
          next(
            ApiError.badRequest("You must provide a valid name for the product")
          );
          break;

        case "description":
        case "category":
        case "size":
        case "brand":
        case "color":
          next(
            ApiError.badRequest(
              "You must provide valid product information including description, category, size, brand, color and/or texture"
            )
          );
          break;

        case "price":
          next(
            ApiError.badRequest(
              "You must provide valid pricing for the product"
            )
          );
          break;

        case "onSale":
        case "isAvailable":
          next(
            ApiError.badRequest(
              "You must specify if the product is on sale or whether it is available for purchase"
            )
          );
          break;

        case "image":
        case "uploadedFile":
          next(
            ApiError.badRequest(
              "The existing image URL or file path is not in a valid format. Please re-upload the image."
            )
          );
          break;

        default:
          next(
            ApiError.badRequest(
              "Invalid form information. Please check and try again."
            )
          );
      }
    } else {
      next();
    }
  },
};
