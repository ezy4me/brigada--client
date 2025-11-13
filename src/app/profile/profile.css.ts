import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const section = style({
  backgroundColor: vars.color.background.primary,
  width: "100%",
  // padding: `${vars.spacing["48"]} 0`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  width: "100%",
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  // marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  // marginBottom: vars.spacing["32"],
});
