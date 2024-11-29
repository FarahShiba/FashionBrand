import { style } from "@vanilla-extract/css";
import { black } from "tailwindcss/colors";
import { vars } from "../../styles/themes.css";

export const header = style({
  padding: vars.space["2x"],
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ceadae",
});

export const brand = style({
  display: "flex",
  alignItems: "center",
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textPrimary,
  textDecoration: "none",
});

export const navLinks = style({
  display: "flex",
  gap: vars.space["2x"],
  fontSize: vars.fontSizes["3x"],
  fontWeight: vars.fontWeights.normal,
});

export const link = style({
  color: vars.colors.textSecondary,
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: vars.space["1x"],
  ":hover": {
    backgroundColor: vars.colors.grey200,
    color: vars.colors.secondary,
  },
});

export const authLink = style({
  marginRight: "1rem",
  color: vars.colors.textSecondary,
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: vars.space["1x"],
  ":hover": {
    backgroundColor: vars.colors.grey200,
    color: vars.colors.secondary,
  },
});

export const logoImage = style({
  width: "45px",
  height: "auto",
  marginRight: vars.space["1x"],
});

export const cartButton = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const cartBadge = style({
  position: "absolute",
  top: "-5px",
  right: "-5px",
  fontSize: "0.75rem",
});
