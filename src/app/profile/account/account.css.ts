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

export const formCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
});

export const fieldGroup = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.spacing["16"],
  marginBottom: vars.spacing["16"],
});

export const saveButton = style({
  marginTop: vars.spacing["16"],
});
