import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const notFoundContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  minHeight: "100vh",
  backgroundColor: vars.colors.background,
  color: vars.colors.textPrimary,
  fontFamily: vars.fonts.body,
});

export const imageWrapper = style({
  width: "100%",
  maxWidth: "400px",
  marginBottom: vars.space["4x"],
});

export const image = style({
  width: "100%",
  height: "auto",
});

export const title = style({
  fontSize: "4rem",
  fontWeight: "bold",
  color: vars.colors.primary,
  margin: `${vars.space["2x"]} 0`,
});

export const subtitle = style({
  fontSize: "1.5rem",
  color: vars.colors.textSecondary,
  marginBottom: vars.space["3x"],
});

export const backButton = style({
  fontSize: "1rem",
  padding: `${vars.space["1x"]} ${vars.space["3x"]}`,
  color: vars.colors.buttonText,
  backgroundColor: vars.colors.buttonBackground,
  border: `1px solid ${vars.colors.buttonBorder}`,
  borderRadius: vars.space["1x"],
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.colors.buttonBackgroundHover,
  },
});
