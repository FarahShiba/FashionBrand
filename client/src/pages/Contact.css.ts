import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  padding: "8rem",
  // backgroundColor: "#f2f2f2 ",
  justifyContent: "center",
});

export const infoSection = style({
  backgroundColor: "#6f4e37",
  color: "#fff",
  padding: "2rem",
  borderRadius: "8px 0 0 8px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const infoTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const infoItem = style({
  fontSize: "14px",
  marginBottom: "0.5rem",
});

export const socialIcons = style({
  display: "flex",
  marginTop: "1rem",
});

export const icon = style({
  fontSize: "16px",
  color: "#fff",
  marginRight: "0.5rem",
  cursor: "pointer",
});

export const formSection = style({
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "0 8px 8px 0",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "500px",
});

export const formTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: vars.colors.textPrimary,
});

export const row = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
});

export const input = style({
  flex: 1,
  padding: "0.75rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
});

export const textArea = style({
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  height: "100px",
  marginBottom: "1rem",
});

export const button = style({
  padding: "0.75rem 2rem",
  backgroundColor: "#b6977d",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  ":hover": {
    backgroundColor: "#b6977d",
  },
});
