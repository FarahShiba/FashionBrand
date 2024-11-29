import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "45rem",
});

export const form = style({
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#4b3621",
  marginBottom: "1rem",
  borderBottom: "2px solid #4b3621",
  paddingBottom: "0.5rem",
});

export const input = style({
  width: "100%",
  padding: "0.75rem",
  margin: "0.5rem 0",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "14px",
});

export const button = style({
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#8d6e63",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "1rem",
  ":hover": {
    backgroundColor: "#6d4c41",
  },
});

export const footerText = style({
  fontSize: "14px",
  color: "#666",
  marginTop: "1rem",
});

export const loginLink = style({
  color: "#4b3621",
  textDecoration: "none",
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
  },
});

export const welcomeSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ddc8cf",
  height: "100%",
  padding: "7.5rem",
  textAlign: "center",
});

export const welcomeTitle = style({
  fontSize: "32px",
  color: "#4b3621",
  fontWeight: "lighter 20px",
  marginBottom: "0.5rem",
});

export const loginButton = style({
  backgroundColor: "#4b3621",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "4px",
  fontSize: "16px",
  ":hover": {
    backgroundColor: "#3b2a1b",
  },
});
