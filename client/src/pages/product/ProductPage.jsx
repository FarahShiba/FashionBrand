import React, { useState, useEffect, useRef } from "react";
import { Spinner, Button, Alert, ButtonGroup } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";
import ProductList from "../../components/products/ProductList";
import { Link } from "react-router-dom";
import * as styles from "./ProductPage.css";

function ProductPage() {
  // HOOK: CONTEXT FOR AUTH
  const { user } = useAuth();

  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("All");

  // useRef to track if the effect has already run
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      // Fetch products only once
      fetchProducts();

      // Mark effect as run
      effectRan.current = true;
    }
  }, []);

  async function fetchProducts() {
    try {
      const response = await productService.getAll();
      if (response && response.data) {
        const fetchedData = response.data;
        setData(fetchedData);
        setFilteredData(fetchedData);
      } else {
        throw new Error("No product data received");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // Handle category change and filter data accordingly
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setFilteredData(
      selectedCategory === "All"
        ? data
        : data.filter((product) => product.category === selectedCategory)
    );
  };

  // Render error state
  if (error) {
    return (
      <div className={styles.container}>
        <Alert variant="danger">
          Error loading products. Please try again later.
        </Alert>
      </div>
    );
  }

  // Render loading state
  if (loading) {
    return (
      <div className={styles.container}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Main content
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Fashion Store Products</h1>
      <p className={styles.description}>
        Discover our latest fashion products, curated for your unique style.
      </p>

      {/* Category filter buttons */}
      <ButtonGroup className={styles.buttonGroup}>
        {["All", "Dresses", "Accessories", "Shoes"].map((cat) => (
          <Button
            key={cat}
            variant={cat === category ? "dark" : "outline-dark"}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </ButtonGroup>

      {/* Add Product button for authorized users */}
      {user && (
        <div>
          <Button
            as={Link}
            to="/fashion/product/add"
            variant="primary"
            className={styles.addButton}
          >
            Add Product
          </Button>
        </div>
      )}

      {/* Product List */}
      <ProductList products={filteredData} />
    </div>
  );
}

export default ProductPage;
