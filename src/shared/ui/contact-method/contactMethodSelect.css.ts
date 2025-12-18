import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  width: "100%",
});

export const label = style({
  fontSize: vars.font.size.body2,
  fontWeight: 500,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing["4"],
});

export const selectedMethod = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  padding: vars.spacing["12"],
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background.secondary,
  border: `1px solid ${vars.color.border.default}`,
  marginTop: vars.spacing["8"],
});

export const selectedIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.secondary,
});

export const selectedLabel = style({
  fontSize: vars.font.size.body1,
  fontWeight: 500,
  color: vars.color.text.primary,
});

export const methodsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: vars.spacing["12"],
  marginTop: vars.spacing["12"],
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const methodButton = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.spacing["16"],
  borderRadius: vars.radius.lg,
  border: `2px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    borderColor: vars.color.brand.primary,
    backgroundColor: `${vars.color.brand.primary}10`,
  },
  selectors: {
    "&[data-selected='true']": {
      borderColor: vars.color.brand.primary,
      backgroundColor: `${vars.color.brand.primary}20`,
    },
  },
});

export const methodIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  marginBottom: vars.spacing["12"],
  selectors: {
    [`${methodButton}[data-selected='true'] &`]: {
      backgroundColor: vars.color.brand.primary,
      color: vars.color.text.secondary,
    },
    [`${methodButton}:not([data-selected='true']) &`]: {
      backgroundColor: vars.color.background.secondary,
      color: vars.color.text.secondary,
    },
  },
});

export const methodName = style({
  fontSize: vars.font.size.body1,
  fontWeight: 500,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["4"],
});

export const methodDescription = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
  textAlign: "center",
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  marginTop: vars.spacing["4"],
});
