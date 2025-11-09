import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: vars.spacing["16"],
  width: "100%",
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

export const button = style({
  marginTop: vars.spacing["16"],
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  textAlign: "left",
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
  ":hover": {
    color: vars.color.brand.primary,
  },
});
