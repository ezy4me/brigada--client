import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const section = style({
  backgroundColor: vars.color.background.primary,
  padding: `${vars.spacing["48"]} 0`,
  width: "100%",
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const selectRoleContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["24"],
  textAlign: "center",
});

export const title = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
});

export const roleSelectorWrapper = style({
  marginBottom: vars.spacing["24"],
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["16"],
  marginBottom: vars.spacing["32"],
});

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.spacing["24"],
  marginBottom: vars.spacing["32"],
});

export const statCard = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.secondary,
  border: `1px solid ${vars.color.border.default}`,
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.spacing["16"],
});