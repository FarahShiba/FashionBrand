import api from "./api";

function getAll() {
  return api.get("/api/products");
}

function post(data) {
  const formData = prepareFormData(data);
  return api.post("/api/products", formData, formConfig);
}

function getById(id) {
  return api.get("/api/products/" + id);
}

function put(id, data, uploadedFile) {
  const formData = prepareFormData(data, uploadedFile);
  return api.put("/api/products/" + id, formData, formConfig);
}

function del(id) {
  return api.delete(`/api/products/${id}`);
}

// REFACTORED VARIABLES/FUNCTIONS:

// 1. Form Config - Sets the content header to form data
const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

// 2. Prepare Form Data - Formats mixed data for uploading files
function prepareFormData(data, uploadedFile) {
  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("price", data.price);
  formData.append("size", data.size);
  formData.append("brand", data.brand);
  formData.append("color", data.color);
  formData.append("onSale", data.onSale);
  formData.append("isAvailable", data.isAvailable);
  formData.append("image", data.image);

  if (uploadedFile) {
    formData.append("uploadedFile", uploadedFile);
  }

  return formData;
}

// Exporting all functions as part of productService
const productService = {
  getAll,
  post,
  getById,
  put,
  del,
};

export default productService;
