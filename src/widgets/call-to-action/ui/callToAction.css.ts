import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const wrapper = style({});

export const container = style({
  backgroundColor: vars.color.gray["900"],
  color: vars.color.text.inverted,
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["32"]} ${vars.spacing["24"]}`,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
});

export const text = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.inverted,
});

export const buttonLink = style({
  display: "inline-block",
  textDecoration: "none",
});
