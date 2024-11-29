import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { getFileFromUrl } from "../../../utils/writeUtils";
import productService from "../../services/productService";
import * as styles from "./EditProduct.css.ts";

function EditProduct() {
  //   const params = useParams();
  const { id } = useParams();
  const navigate = useNavigate();
  const effectRan = useRef(false);
  const [productData, setProductData] = useState({
    id: id,
    name: "",
    description: "",
    brand: "",
    color: "",
    category: "",
    price: 0,
    size: "",
    onSale: false,
    isAvailable: true,
    image: "",
  });
  // Destructure productData
  const {
    name,
    description,
    brand,
    color,
    category,
    price,
    size,
    onSale,
    isAvailable,
    image,
  } = productData;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [uploadedFile, setUploadedFile] = useState("");
  const [preview, setPreview] = useState(true);

  useEffect(() => {
    if (effectRan.current === false && id) {
      console.log("Product ID from URL:", id);
      fetchProduct(id); // Pass the actual id here
      setLoading(false);
      effectRan.current = true;
    }
  }, [id]);

  async function fetchProduct(productId) {
    try {
      console.log(`Fetching product with ID: ${productId}`);
      const response = await productService.getById(productId); // Pass the correct id
      const dbProduct = response.data;
      console.log(dbProduct);

      setProductData((prevData) => ({ ...prevData, ...dbProduct }));

      if (dbProduct.image) {
        const fileGlob = getFileFromUrl(dbProduct.image);
        setUploadedFile(fileGlob);
      }
    } catch (err) {
      console.error("Error fetching product:", err.response || err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleOnSaleChange = (e) => {
    const { name, checked } = e.target;
    setProductData({ ...productData, [name]: checked }); // Set as boolean directly
  };

  const handleCheckboxChanges = (e) => {
    const { name, checked } = e.target;
    setProductData({ ...productData, [name]: checked });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
    setPreview(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await productService.put(id, productData, uploadedFile);
      console.log(response);
      navigate("/fashion/products");
    } catch (err) {
      console.log(err?.response);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error loading product data. Please try again later.</p>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className={styles.formContainer}>
      <h2 className={styles.heading}>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Product Name</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="name"
              value={name}
              onChange={handleTextChange}
              placeholder="Enter product name"
              required
            />
          </Col>
          {/* Additional Fields */}
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Description</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="description"
              value={description}
              onChange={handleTextChange}
              placeholder="Enter product description"
              required
            />
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={category}
              onChange={handleTextChange}
              className={styles.formControl}
              required
            >
              <option value="">Select Category</option>
              <option value="Dresses">Dresses</option>
              <option value="Accessories">Accessories</option>
              <option value="Shoes">Shoes</option>
            </Form.Control>
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Price</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                className={styles.formControl}
                type="number"
                name="price"
                value={price}
                onChange={handleTextChange}
                placeholder="Enter product price"
                required
              />
            </InputGroup>
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Brand</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="brand"
              value={brand}
              onChange={handleTextChange}
              placeholder="Enter brand name"
            />
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Color</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="color"
              value={color}
              onChange={handleTextChange}
              placeholder="Enter color"
            />
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Size</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="size"
              value={size}
              onChange={handleTextChange}
              placeholder="Enter size"
            />
          </Col>

          {/* On Sale and Available Checkbox */}
          <Col md={6} className={styles.formGroup}>
            <Form.Check
              type="checkbox"
              label="On Sale"
              name="onSale"
              checked={productData.onSale} // Directly use the boolean value
              onChange={handleOnSaleChange}
              className={styles.formControl}
            />
          </Col>
          <Col md={6} className={styles.formGroup}>
            <Form.Check
              type="checkbox"
              label="Available"
              name="isAvailable"
              checked={productData.isAvailable}
              onChange={handleCheckboxChanges}
              className={styles.formControl}
            />
          </Col>

          <Col md={12} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </Col>

          {/* Preview Image */}
          {preview && !loading && (
            <Col md={12}>
              <img src={image} alt="Preview" className={styles.previewImage} />
            </Col>
          )}
        </Row>

        <Button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Update Product"
          )}
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
