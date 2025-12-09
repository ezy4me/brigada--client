import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  width: "100%",
  overflow: 'visible'
  // minHeight: "200px",
});

export const roleSelectorWrapper = style({
  marginBottom: vars.spacing["16"],
  display: "flex",
  justifyContent: "center",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const selectLabel = style({
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const tariffDropdown = style({
  width: "100%",
  justifyContent: "flex-start",
});

export const button = style({
  marginTop: vars.spacing["16"],
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  marginTop: vars.spacing["4"],
});

export const terms = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.spacing["8"],
  marginTop: vars.spacing["16"],
});

export const termsLabel = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  lineHeight: vars.font.lineHeight.tight,
});

export const passwordToggle = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  transition: "color 0.2s ease",
});
