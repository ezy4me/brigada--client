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

export const header = style({
  textAlign: "center",
  marginBottom: vars.spacing["32"],
});

export const title = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
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
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.02)",
  },
});

export const statIcon = style({
  color: vars.color.brand.primary,
});

export const statLabel = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const statValue = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.spacing["16"],
});