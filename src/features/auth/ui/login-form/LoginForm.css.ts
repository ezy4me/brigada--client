import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const form = style({
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  //   padding: vars.spacing["16"],
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const button = style({
  //   marginTop: vars.spacing["16"],
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  textAlign: "left",
  marginTop: vars.spacing["4"],
});

export const forgotPassword = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: vars.spacing["4"],
});

export const forgotPasswordLink = style({
  fontSize: vars.font.size.body2,
  color: vars.color.brand.primary,
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
});
