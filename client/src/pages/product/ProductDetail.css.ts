import { style } from "@vanilla-extract/css";

export const productContainer = style({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const productBox = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  width: "100%",
});

export const productBoxLeft = style({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const productImage = style({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "8px",
});

export const productBoxRight = style({
  flex: "2",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const productTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#333",
});

export const productPrice = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#d9534f", // This color emphasizes the price
});

export const productDescription = style({
  fontSize: "1rem",
  color: "#555",
});

export const productCategory = style({
  fontSize: "1rem",
  color: "#555",
});

export const productSize = style({
  fontSize: "1rem",
  color: "#555",
});

export const productTexture = style({
  fontSize: "1rem",
  color: "#555",
});

export const productAvailability = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: "#5cb85c", // Green for "In Stock"
  selectors: {
    '&:not(:contains("In Stock"))': {
      color: "#d9534f", // Red for "Out of Stock"
    },
  },
});

export const adminControls = style({
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",
});

export const editButton = style({
  backgroundColor: "#0275d8",
  color: "#fff",
  ":hover": {
    backgroundColor: "#025aa5",
  },
});

export const deleteButton = style({
  backgroundColor: "#d9534f",
  color: "#fff",
  ":hover": {
    backgroundColor: "#c9302c",
  },
});
