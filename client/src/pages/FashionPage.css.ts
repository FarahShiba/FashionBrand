import { style } from "@vanilla-extract/css";
import { vars } from "../../src/styles/themes.css";

export const fashionPageContainer = style({
  padding: "2rem 0",
});

export const headerBanner = style({
  textAlign: "center",
  marginBottom: "2rem",
  padding: "2rem",
  backgroundColor: vars.colors.primary,
  color: "#fff",
  borderRadius: "8px",
});

export const shopButton = style({
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "bold",
  backgroundColor: vars.colors.secondary,
});

export const section = style({
  marginBottom: "3rem",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: vars.colors.textPrimary,
});

export const collectionCard = style({
  overflow: "hidden",
  borderRadius: "8px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const categoryCard = style({
  overflow: "hidden",
  borderRadius: "8px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.05)",
  },
});
