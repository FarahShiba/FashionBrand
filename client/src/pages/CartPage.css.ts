// src/pages/cart/CartPage.css.ts
import { style } from "@vanilla-extract/css";

export const cartContainer = style({
  padding: "20px",
});

export const cartItem = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "10px",
});

export const cartImage = style({
  width: "80px",
  height: "80px",
  objectFit: "cover",
  marginRight: "20px",
});

export const itemName = style({
  margin: "0",
  fontWeight: "bold",
});

export const itemPrice = style({
  margin: "0",
});
