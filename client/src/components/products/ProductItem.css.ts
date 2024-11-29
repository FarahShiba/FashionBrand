// ProductItem.css.ts
import { style } from "@vanilla-extract/css";

export const productLink = style({
  textDecoration: "none",
  color: "inherit",
});

export const productCard = style({
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  textAlign: "center",
  transition: "transform 0.2s ease-in-out",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const productImage = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px 8px 0 0",
});

export const productCardContent = style({
  padding: "10px 0",
});

export const productCardTitle = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "10px 0 5px",
});

export const productPrice = style({
  color: "#333",
  fontSize: "1rem",
});
