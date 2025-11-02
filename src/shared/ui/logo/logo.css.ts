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
        flexDirection: "column",
      },
      horizontal: {
        flexDirection: "row",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const logoImage = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  objectFit: "contain",
});

export const logoText = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.secondary, 
  letterSpacing: "0.02em",
  fontFamily: "'Montserrat', sans-serif", 
});

export const logoTextSecondary = style({
  color: vars.color.brand.primary, 
});