import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  color: vars.colors.textPrimary,
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const appContent = style({
  flex: 1,
  margin: vars.space["2x"],
});
