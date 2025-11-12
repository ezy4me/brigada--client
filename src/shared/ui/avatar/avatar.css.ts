import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const avatar = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  borderRadius: vars.radius.full,
  objectFit: "cover",
  border: `2px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.gray["200"],
});
