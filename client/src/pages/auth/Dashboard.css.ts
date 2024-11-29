import { style } from "@vanilla-extract/css";
import { black } from "tailwindcss/colors";
import { vars } from "../../styles/themes.css";

export const dashboardContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "800px",
});

export const profileCard = style({
  maxWidth: "600px",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: vars.colors.background,
  padding: vars.space["3x"],
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export const avatar = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  backgroundColor: "#F2D2BD",
  borderRadius: "50%",
  fontSize: "32px",
  fontWeight: vars.fontWeights.bold,
  color: "#4A0404",
  textAlign: "center",
  lineHeight: "150px",
  marginBottom: vars.space["3x"],
});

export const errorCard = style({
  maxWidth: "400px",
  backgroundColor: vars.colors.error,
  border: `1px solid ${vars.colors.grey400}`,
  padding: vars.space["2x"],
});
