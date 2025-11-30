import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const resultsCount = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  fontWeight: vars.font.weight.medium,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
});

export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.spacing["48"]} ${vars.spacing["24"]}`,
  textAlign: "center",
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
});

export const emptyIcon = style({
  fontSize: "48px",
  marginBottom: vars.spacing["16"],
});

export const emptyTitle = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const emptyDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  maxWidth: "300px",
});
