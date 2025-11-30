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
  marginTop: vars.spacing["16"],
});

export const errorText = style({
  fontSize: vars.font.size.caption,
  color: vars.color.status.error,
  textAlign: "left",
  marginTop: vars.spacing["4"],
});
