import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  padding: vars.spacing["24"],
});

export const userInfo = style({
  marginTop: vars.spacing["24"],
  marginBottom: vars.spacing["32"],
  padding: vars.spacing["20"],
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
});

export const stats = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.spacing["20"],
  marginTop: vars.spacing["32"],
});

export const statCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadow.md,
  },
});