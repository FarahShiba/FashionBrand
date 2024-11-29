import { style } from "@vanilla-extract/css";

export const gridContainer = style({
  display: "flex",
  justifyContent: "center",
  padding: "50px",
});

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "30px",
  width: "100%",
  maxWidth: "1500px",
});
