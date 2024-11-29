import { style } from "@vanilla-extract/css";
import { black } from "tailwindcss/colors";
import { vars } from "../../styles/themes.css";

export const formContainer = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  backgroundColor: vars.colors.background,
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

export const heading = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  color: vars.colors.primary,
  marginBottom: "1.5rem",
  textAlign: "center",
});

export const formGroup = style({
  marginBottom: "1rem",
});

export const formLabel = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.colors.textPrimary,
  marginBottom: "0.5rem",
  display: "block",
});

export const formControl = style({
  width: "100%",
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "4px",
  border: `1px solid`,
  ":focus": {
    borderColor: vars.colors.primary,
    outline: "none",
  },
});

export const fileInput = style({
  padding: "0.4rem",
  fontSize: "1rem",
  borderRadius: "4px",
  border: `1px solid `,
});

export const submitButton = style({
  width: "100%",
  padding: "0.75rem",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#fff",
  backgroundColor: vars.colors.primary,
  border: "none",
  borderRadius: "4px",
  marginTop: "1.5rem",
  cursor: "pointer",
  ":disabled": {
    backgroundColor: black,
    cursor: "not-allowed",
  },
});
