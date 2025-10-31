import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const baseWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["12"],
});

export const logoWrapper = recipe({
  base: baseWrapper,
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const logoImage = style({
  width: vars.spacing["64"],
  height: vars.spacing["64"],
  objectFit: "contain",
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.full,
  padding: vars.spacing["8"],
  backgroundColor: vars.color.background.primary,
});

export const logoText = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  letterSpacing: "0.02em",
});