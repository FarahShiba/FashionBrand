import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import * as styles from "./ProductItem.css";
import { priceFormatter } from "../../../utils/readUtils";

const ProductItem = ({ id, image, name, price }) => {
  const formattedPrice = priceFormatter(parseFloat(price) || 0);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/fashion/product/${id}`); // Navigate to ProductDetail page
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevents the card's onClick from being triggered
    const product = { id, image, name, price };
    console.log("Add to Cart button clicked:", product);
    addToCart(product); // Add product to cart
  };

  return (
    <div className={styles.productCard} onClick={handleDetailClick}>
      <img
        src={image}
        alt={name}
        className={styles.productImage}
        onClick={(e) => {
          e.stopPropagation(); // Prevents event bubbling
          handleDetailClick();
        }}
      />
      <div className={styles.productCardContent}>
        <h2
          className={styles.productCardTitle}
          onClick={(e) => {
            e.stopPropagation(); // Prevents event bubbling
            handleDetailClick();
          }}
        >
          {name}
        </h2>
        <p className={styles.productPrice}>{formattedPrice}</p>

        <button
          onClick={handleAddToCartClick}
          className={styles.addToCartButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
