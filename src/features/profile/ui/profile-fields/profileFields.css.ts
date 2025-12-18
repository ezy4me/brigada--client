import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const fields = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
});

export const fieldGroup = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.spacing["16"],
  "@media": {
    "screen and (max-width: 767px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const singleField = style({
  width: "100%",
});

export const selectLabel = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const select = style({
  padding: vars.spacing["12"],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  ":focus": {
    outline: "none",
    borderColor: vars.color.brand.primary,
  },
  ":disabled": {
    backgroundColor: vars.color.background.secondary,
    cursor: "not-allowed",
  },
});

export const hint = style({
  marginTop: vars.spacing["4"],
  opacity: 0.7,
});

export const errorText = style({
  marginTop: vars.spacing["4"],
});

export const retryButton = style({
  display: "inline-block",
  marginTop: vars.spacing["8"],
  padding: `${vars.spacing["4"]} ${vars.spacing["8"]}`,
  background: vars.color.brand.primary,
  color: vars.color.text.primary,
  border: "none",
  borderRadius: vars.radius.sm,
  fontSize: vars.font.size.caption,
  cursor: "pointer",
  ":hover": {
    opacity: 0.9,
  },
});

export const selectContainer = style({
  marginBottom: vars.spacing["8"],
});

export const errorContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  marginTop: vars.spacing["8"],
});
