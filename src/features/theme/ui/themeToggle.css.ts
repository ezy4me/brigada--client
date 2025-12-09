import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const themeButton = style({
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.full,
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  
  ":hover": {
    backgroundColor: vars.color.background.tertiary,
    borderColor: vars.color.border.strong,
    transform: "translateY(-1px)",
    boxShadow: vars.shadow.md,
  },
  
  ":active": {
    transform: "translateY(0)",
  },
  
  ":focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}40`,
  },
});

export const themeButtonIcon = style({
  color: vars.color.text.primary,
  transition: "color 0.2s ease",
  selectors: {
    [`${themeButton}:hover &`]: {
      color: vars.color.brand.primary,
    },
  },
});