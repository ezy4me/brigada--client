import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  width: "100%",
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
});

export const supportCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
});

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const input = style({
  padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  fontFamily: vars.font.family,
  fontSize: vars.font.size.body1,
  outline: "none",
  ":focus": {
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
  },
});

export const textarea = style({
  minHeight: "120px",
  padding: vars.spacing["16"],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  fontFamily: vars.font.family,
  fontSize: vars.font.size.body1,
  outline: "none",
  resize: "vertical",
  ":focus": {
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
  },
});

export const sendButton = style({
  marginTop: vars.spacing["16"],
  alignSelf: "flex-start",
});
