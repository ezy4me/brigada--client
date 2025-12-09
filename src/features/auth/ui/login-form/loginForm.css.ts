import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["20"],
  width: "100%",
});

export const fieldsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
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
  padding: 0,
  ":hover": {
    textDecoration: "underline",
  },
  ":disabled": {
    color: vars.color.text.secondary,
    cursor: "not-allowed",
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
  ":disabled": {
    color: vars.color.text.secondary,
    cursor: "not-allowed",
  },
});

export const button = style({
  marginTop: vars.spacing["8"],
  width: "100%",
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  textAlign: "center",
  padding: vars.spacing["8"],
  backgroundColor: vars.color.status.error + "20",
  borderRadius: vars.radius.md,
  marginTop: vars.spacing["8"],
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});