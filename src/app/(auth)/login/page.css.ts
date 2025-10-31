import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing["16"],
  padding: vars.spacing["16"],
  textAlign: "center",
  minHeight: "100vh",
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  margin: 0,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  margin: 0,
});

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  flexDirection: 'column',
  gap: vars.spacing["12"],
});

export const logoImage = style({
  width: vars.spacing["64"],
  height: vars.spacing["64"],
  objectFit: "contain",
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.full,
  padding: vars.spacing["8"],
  backgroundColor: vars.color.background.primary,
});

export const logoText = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  letterSpacing: "0.02em",
});

export const footer = style({
//   marginTop: vars.spacing["16"],
});

export const footerText = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const footerLink = style({
  color: vars.color.brand.primary,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});