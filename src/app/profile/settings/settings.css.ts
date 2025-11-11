import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing["32"],
});

export const settingsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: vars.spacing["24"],
});

export const settingCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
});

export const cardTitle = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["16"],
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const label = style({
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const checkboxGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
});

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  cursor: "pointer",
});

export const checkbox = style({
  width: vars.spacing["16"],
  height: vars.spacing["16"],
  accentColor: vars.color.brand.primary,
});

export const radioGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
});

export const radioLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  cursor: "pointer",
});

export const radio = style({
  width: vars.spacing["16"],
  height: vars.spacing["16"],
  accentColor: vars.color.brand.primary,
});

export const button = style({
  marginTop: "auto",
});
