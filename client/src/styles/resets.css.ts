import { globalStyle } from "@vanilla-extract/css"; //globalStyle defines global CSS rules for the entire application to ensure consistent styling, default styles, and predictable layouts. It is commonly used for CSS resets and base styles.

// Basic box-sizing rule to make layouts predictable
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

// Remove default margins for a clean slate
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0,
});

// Set basic body defaults
globalStyle("body", {
  minHeight: "100vh",
  lineHeight: 1.5,
  fontFamily: "Arial, sans-serif", // Simple, clean font
  backgroundColor: "#ffffff", // White background for simplicity
  color: "#333", // Dark gray text for readability
});

// Make images responsive and clean with block display
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block",
});

// Minimal form element styling for consistency
globalStyle("input, button, textarea, select", {
  font: "inherit", // Inherit font settings from parent elements
});

// Basic anchor styling to remove underline and inherit color
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});
