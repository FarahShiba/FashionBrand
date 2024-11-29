import { createGlobalTheme } from "@vanilla-extract/css"; //Defines global CSS variables for consistent and themeable styling across my application.
import twColors from "tailwindcss/colors";

export const root = createGlobalTheme(":root", {
  fonts: {
    body: "Inter, sans-serif",
    brand: "Montserrat, sans-serif",
  },
  colors: {
    primary: twColors.orange[200],
    secondary: twColors.rose[500],
    background: twColors.slate[50],
    textPrimary: twColors.gray[800],
    textSecondary: twColors.gray[600],
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
  },
  fontSizes: {
    "1x": "8px",
    "2x": "12px",
    "3x": "16px",
    "4x": "20px",
    "5x": "24px",
    "15x": "72px",
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  space: {
    none: "0",
    "1x": "8px",
    "2x": "16px",
    "3x": "24px",
    "4x": "32px",
    "5x": "40px",
    "6x": "48px",
  },
});
export const vars = { ...root }; //vars is used to import and apply global theme variables (like colors, spacing, and fonts) to any component or page where you want to apply styling.
