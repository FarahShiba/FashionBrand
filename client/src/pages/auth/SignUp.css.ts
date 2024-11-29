import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  height: "45rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const formSide = style({
  backgroundColor: "#9a7b78",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const formCard = style({
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#6d4c41",
  marginBottom: "1rem",
  textAlign: "center",
});

export const input = style({
  width: "100%",
  padding: "0.75rem",
  margin: "1rem 0",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "14px",
});

export const button = style({
  width: "100%",
  padding: "0.75rem",
  backgroundColor: vars.colors.secondary,
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "1rem",
});

export const socialButtons = style({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1.2rem",
});

export const socialIcon = style({
  fontSize: "24px",
  padding: "0.5rem",
  backgroundColor: "#e0e0e0",
  borderRadius: "4px",
  color: "#6d4c41",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#d1c4e9",
  },
});

export const welcomeSide = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ddc8cf",
  padding: "2rem",
  borderRadius: "8px",
});

export const welcomeBack = style({
  textAlign: "center",
  padding: "1rem",
});

export const loginButton = style({
  backgroundColor: "#6d4c41",
  color: "#fff",
  padding: "0.75rem 1rem",
  borderRadius: "4px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#8d6e63",
  },
});
