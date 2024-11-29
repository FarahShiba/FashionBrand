import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const navlink = style({
  color: "#8B0000",
  padding: "10px",
  borderRadius: vars.space["1x"],
  fontSize: vars.fontSizes["3.5x"],
  cursor: "pointer",
  backgroundColor: "transparent",
  textDecoration: "none",
  fontWeight: vars.fontWeights.bold,
  ":hover": {
    textDecoration: "underline",
  },
});
