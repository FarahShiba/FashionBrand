import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const aboutUsContainer = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.textPrimary,
  overflow: "hidden",
});

export const imageSection = style({
  position: "relative",
  width: "100%",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const backgroundImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
});

export const imageText = style({
  fontSize: "3rem",
  color: "#fff",
  fontWeight: "bold",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  zIndex: 1,
});

export const textContent = style({
  maxWidth: "800px",
  margin: "2rem auto",
  textAlign: "justify",
  padding: vars.space["4x"],
});

export const title = style({
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  marginBottom: vars.space["2x"],
});

export const shopButton = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.bold,
  marginTop: vars.space["3x"],
  padding: "0.75rem 1.5rem",
  backgroundColor: vars.colors.secondary,
  color: "#fff",
});
