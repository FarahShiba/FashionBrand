import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import * as styles from "./CartPage.css";

function CartPage() {
  const { cart } = useCart();

  return (
    <Container className={styles.cartContainer}>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.cartImage}
            />
            <div>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemPrice}>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </Container>
  );
}

export default CartPage;
