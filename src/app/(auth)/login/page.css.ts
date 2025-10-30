import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  textAlign: "center",
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
  border: `1px solid ${vars.color.gray["200"]}`,
  borderRadius: vars.radius.full,
  padding: vars.spacing["8"],
  backgroundColor: vars.color.white,
});

export const logoText = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  letterSpacing: "0.02em",
});
