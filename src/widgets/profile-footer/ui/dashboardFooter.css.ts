import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const footer = style({
  padding: `${vars.spacing["16"]} ${vars.spacing["24"]}`,
  borderTop: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
});

export const copyright = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
  textAlign: "center",
});