import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
  width: "100%",
});

export const wrapper = style({
  position: "relative",
});

export const label = style({
  fontSize: vars.font.size.body2,
  fontWeight: 500,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing["4"],
});

export const trigger = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  fontSize: vars.font.size.body1,
  textAlign: "left",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      borderColor: vars.color.border.default,
    },
    "&:focus": {
      outline: "none",
      borderColor: vars.color.brand.primary,
      boxShadow: `0 0 0 3px ${vars.color.brand.primary}20`,
    },
  },
});

export const triggerError = style({
  borderColor: vars.color.status.error,
  selectors: {
    "&:focus": {
      borderColor: vars.color.status.error,
      boxShadow: `0 0 0 3px ${vars.color.status.error}20`,
    },
  },
});

export const triggerDisabled = style({
  backgroundColor: vars.color.background.secondary,
  color: vars.color.text.primary,
  cursor: "not-allowed",
  selectors: {
    "&:hover": {
      borderColor: vars.color.border.default,
    },
  },
});

export const value = style({
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const icon = style({
  transition: "transform 0.2s ease",
  marginLeft: vars.spacing["8"],
});

export const iconOpen = style({
  transform: "rotate(180deg)",
});

export const dropdown = style({
  position: "absolute",
  top: "calc(100% + 4px)",
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.lg,
  overflow: "hidden",
  maxHeight: "300px",
  display: "flex",
  flexDirection: "column",
});

export const searchContainer = style({
  padding: vars.spacing["12"],
  borderBottom: `1px solid ${vars.color.border.default}`,
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
});

export const searchIcon = style({
  color: vars.color.text.primary,
  flexShrink: 0,
});

export const searchInput = style({
  flex: 1,
  border: "none",
  backgroundColor: "transparent",
  color: vars.color.text.primary,
  fontSize: vars.font.size.body1,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: vars.color.text.primary,
    },
  },
});

export const optionsList = style({
  flex: 1,
  overflowY: "auto",
  maxHeight: "200px",
  padding: vars.spacing["4"],
});

export const option = style({
  width: "100%",
  padding: "10px 12px",
  textAlign: "left",
  borderRadius: vars.radius.sm,
  backgroundColor: "transparent",
  color: vars.color.text.primary,
  fontSize: vars.font.size.body1,
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.background.secondary,
    },
  },
});

export const optionSelected = style({
  backgroundColor: `${vars.color.brand.primary}20`,
  color: vars.color.brand.primary,
  fontWeight: 500,
  selectors: {
    "&:hover": {
      backgroundColor: `${vars.color.brand.primary}30`,
    },
  },
});

export const optionHighlighted = style({
  backgroundColor: vars.color.background.secondary,
});

export const noResults = style({
  padding: "12px",
  textAlign: "center",
  color: vars.color.text.primary,
  fontSize: vars.font.size.body1,
});

export const helperText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
  marginTop: vars.spacing["4"],
});

export const helperTextError = style({
  color: vars.color.status.error,
});

export const sm = style({
  padding: "8px 12px",
  fontSize: vars.font.size.body2,
});

export const md = style({
  padding: "12px 16px",
  fontSize: vars.font.size.body1,
});

export const lg = style({
  padding: "16px 20px",
  fontSize: vars.font.size.h4,
});
