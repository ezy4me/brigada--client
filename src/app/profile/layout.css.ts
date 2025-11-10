import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: vars.color.background.primary,
});

export const main = style({
  display: "flex",
  flex: 1,
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
});

export const content = style({
  flex: 1,
  padding: vars.spacing["24"],
  backgroundColor: vars.color.background.primary,
});