// src/features/auth/ui/login-form/loginForm.css.ts
import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  width: "100%",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const button = style({
  marginTop: vars.spacing["8"],
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  textAlign: "center",
  marginTop: vars.spacing["8"],
});

export const forgotPassword = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: vars.spacing["4"],
});

export const forgotPasswordLink = style({
  background: "none",
  border: "none",
  color: vars.color.brand.primary,
  fontSize: vars.font.size.caption,
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
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
