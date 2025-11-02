import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.color.background.primary,
  zIndex: 1,
  position: "relative",
});

export const main = style({
  flex: 1,
  // padding: vars.spacing["24"],
});

export const section = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["32"],
});

export const heading = style({
  fontSize: vars.font.size.body1,
  fontWeight: vars.font.weight.medium,
  marginBottom: vars.spacing["16"],
});

export const buttonGroup = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["12"],
});
