import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Spinner,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import productService from "../../services/productService";
import * as styles from "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
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
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties & instance of useNavigate class
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
  } = productData;

  // Handlers for text and file input
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert `isAvailable` and `onSale` to strings explicitly
    const formattedData = {
      ...productData,
      // onSale: onSale ? "true" : "false",
      onSale: onSale, // Pass as boolean directly
      // isAvailable: isAvailable ? "true" : "false",
      isAvailable: isAvailable,
    };

    console.log("Submitting formatted data:", formattedData);

    try {
      await productService.post(formattedData); // Submit as JSON object
      navigate("/fashion/products");
    } catch (err) {
      console.error("Error submitting product:", err?.response);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={styles.formContainer}>
      <h2 className={styles.heading}>Add New Product</h2>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Row>
          {/* Product Name */}
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

          {/* Description */}
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

          {/* Category */}
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

          {/* Price with InputGroup */}
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

          {/* Brand */}
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

          {/* Color */}
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

          {/* Size */}
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

          {/* onSale Toggle */}
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>On Sale</Form.Label>
            <ToggleButtonGroup
              type="radio"
              name="onSale"
              value={onSale}
              onChange={(value) =>
                setProductData({ ...productData, onSale: value })
              }
            >
              <ToggleButton value={true} variant="outline-success">
                Yes
              </ToggleButton>
              <ToggleButton value={false} variant="outline-danger">
                No
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>

          {/* isAvailable Toggle */}
          <Col md={6} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Is Available</Form.Label>
            <ToggleButtonGroup
              type="radio"
              name="isAvailable"
              value={isAvailable}
              onChange={(value) =>
                setProductData({ ...productData, isAvailable: value })
              }
            >
              <ToggleButton value={true} variant="outline-success">
                Available
              </ToggleButton>
              <ToggleButton value={false} variant="outline-danger">
                Out of Stock
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>

          {/* File Upload */}
          <Col md={12} className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </Col>
        </Row>

        {/* Submit Button with Spinner */}
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
            "Add Product"
          )}
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
