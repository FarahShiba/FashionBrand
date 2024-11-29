// EditProduct.css.ts
import { style } from "@vanilla-extract/css";

export const formContainer = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export const heading = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  textAlign: "center",
  color: "#333",
});

export const formGroup = style({
  marginBottom: "1.5rem",
});

export const formLabel = style({
  fontSize: "1rem",
  color: "#555",
});

export const formControl = style({
  borderRadius: "4px",
  borderColor: "#ddd",
  padding: "0.75rem",
  fontSize: "1rem",
  color: "#333",
  selectors: {
    "&:focus": {
      borderColor: "#888",
      boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const fileInput = style({
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "0.5rem",
  color: "#333",
  cursor: "pointer",
});

export const previewImage = style({
  width: "100%",
  maxHeight: "200px",
  objectFit: "cover",
  borderRadius: "4px",
  marginTop: "1rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const submitButton = style({
  display: "block",
  width: "100%",
  padding: "0.75rem",
  fontSize: "1.1rem",
  fontWeight: "bold",
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "#555",
    },
    "&:disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
  },
});
