import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as styles from "./ProductDetail.css";
import { Container, Spinner, Button } from "react-bootstrap";
import { priceFormatter } from "../../../utils/readUtils";
import productService from "../../services/productService";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { user } = useAuth();
  //   const params = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    id: id,
    name: "",
    description: "",
    category: "",
    price: 0,
    size: "",
    color: "",
    brand: "",
    onSale: false,
    isAvailable: true,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    name,
    description,
    category,
    price,
    size,
    color,
    brand,
    isAvailable,
    image,
  } = productData;

  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function fetchProduct() {
    try {
      const response = await productService.getById(id);
      const fetchedProduct = await response.data;
      console.log(fetchedProduct);
      setProductData((productOnMount) => ({
        ...productOnMount,
        ...fetchedProduct,
      }));
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await productService.del(id);

      if (response) {
        console.log("Delete successful:", response);
        setLoading(false);
        navigate("/fashion/products");
      } else {
        console.error("Delete failed: No response received");
        setError(true);
      }
    } catch (error) {
      console.error("Error occurred during delete:", error);
      setError(true);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>
          There was an error loading the product details. Please try again
          later.
        </p>
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
    <Container className={styles.productContainer}>
      <div className={styles.productBox}>
        <div className={styles.productBoxLeft}>
          <img className={styles.productImage} src={image} alt={name} />
        </div>
        <div className={styles.productBoxRight}>
          <h2 className={styles.productTitle}>{name}</h2>
          <p className={styles.productPrice}>{priceFormatter(price)}</p>
          <p className={styles.productDescription}>{description}</p>
          <p className={styles.productCategory}>Category: {category}</p>
          <p className={styles.productSize}>Size: {size}</p>
          <p className={styles.productColor}>Color: {color}</p>
          <p className={styles.productBrand}>Brand: {brand}</p>
          <p className={styles.productAvailability}>
            {isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          {user && (
            <div className={styles.adminControls}>
              <Button
                as={Link}
                to={`/fashion/product/edit/${id}`}
                variant="outline-primary"
                className={styles.editButton}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className={styles.deleteButton}
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
