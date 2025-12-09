import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const drawer = recipe({
  base: {
    backgroundColor: vars.color.background.primary,
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    boxShadow: vars.shadow.lg,
  },

  variants: {
    position: {
      left: {
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      },
      right: {
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
      },
      top: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      },
      bottom: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    size: {
      sm: {
        width: "300px",
      },
      md: {
        width: "400px",
      },
      lg: {
        width: "500px",
      },
      full: {
        width: "100%",
      },
    },
  },

  defaultVariants: {
    position: "right",
    size: "md",
  },
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.spacing["20"],
  borderBottom: `1px solid ${vars.color.border.default}`,
  flexShrink: 0,
});

export const title = style({
  margin: 0,
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
});

export const closeButton = style({
  marginLeft: "auto",
});

export const content = style({
  flex: 1,
  overflowY: "auto",
  padding: vars.spacing["20"],
});
