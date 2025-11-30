import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  padding: vars.spacing["24"],
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  position: "sticky",
  top: vars.spacing["96"],
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.spacing["8"],
});

export const title = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const resetButton = style({
  fontSize: vars.font.size.caption,
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
});

export const sectionTitle = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const rangeInputs = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
});

export const input = style({
  flex: 1,
});

export const dash = style({
  color: vars.color.text.secondary,
  fontWeight: vars.font.weight.medium,
});

export const radioGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const radioLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  cursor: "pointer",
});

export const switchLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  cursor: "pointer",
});

export const actions = style({
  paddingTop: vars.spacing["16"],
  borderTop: `1px solid ${vars.color.border.default}`,
});

export const applyButton = style({
  width: "100%",
});

// В orderFilters.css.ts добавляем:
export const keywordInputContainer = style({
  display: "flex",
  gap: vars.spacing["8"],
  marginBottom: vars.spacing["8"],
});

export const addKeywordButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.brand.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.brand.secondary,
  },
  ":disabled": {
    color: vars.color.text.inverted,
    cursor: "not-allowed",
  },
});

export const keywordsList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["8"],
});

export const keywordTag = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  padding: `${vars.spacing["4"]} ${vars.spacing["8"]}`,
  backgroundColor: vars.color.background.tertiary,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
});

export const keywordText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.primary,
});

export const removeKeywordButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.status.error,
  },
});
