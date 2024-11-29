import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const boxSetting = style({
  paddingLeft: "1px",
  backgroundColor: vars.colors.background,
  margin: vars.space["3x"],
});

export const boxTitle = style({
  fontSize: vars.fontSizes["5x"],
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textPrimary,
  marginBottom: vars.space["2x"],
});

export const boxPara = style({
  fontSize: vars.fontSizes["3x"],
  color: vars.colors.textSecondary,
});

export const boxButton = style({
  marginTop: vars.space["2x"],
});
