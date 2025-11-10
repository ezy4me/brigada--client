import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  padding: vars.spacing["24"],
});

export const header = style({
  marginBottom: vars.spacing["32"],
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
});

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.spacing["24"],
});

export const statCard = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  ":hover": {
    transform: "scale(1.02)",
    transition: "transform 0.2s ease",
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