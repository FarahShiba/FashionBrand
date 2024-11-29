import { style } from "@vanilla-extract/css";
import { vars } from "../../src/styles/themes.css";

export const heroSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  backgroundColor: "#f9f9f9",
});

export const heroText = style({
  maxWidth: "50%",
});

export const heroImage = style({
  maxWidth: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const shopNowLink = style({
  display: "inline-block",
  marginTop: "1.5rem",
  padding: "10px 20px",
  backgroundColor: "#4b3621",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: "#3b2a1b",
  },
});
