import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  backgroundColor: vars.color.background.primary,
  width: "100%",
});

export const container = style({
  backgroundColor: vars.color.gray["900"],
  color: vars.color.text.inverted,
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["32"]} ${vars.spacing["24"]}`,
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.spacing["16"],
  textAlign: "center",

  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      gap: vars.spacing["24"],
    },
  },
});

export const text = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.inverted,
  margin: 0,
});

export const buttonLink = style({
  display: "inline-block",
  textDecoration: "none",
});
