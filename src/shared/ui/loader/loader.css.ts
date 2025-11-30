import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";

const spinKeyframes = keyframes({
  "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
  "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
});

const pulseKeyframes = keyframes({
  "0%, 100%": { transform: "scale(1)", opacity: 1 },
  "50%": { transform: "scale(0.8)", opacity: 0.7 },
});

const baseLoader = style({
  display: "inline-block",
  position: "relative",
});

const spinner = style({
  selectors: {
    "&::after": {
      content: "",
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: `${vars.color.brand.primary} ${vars.color.brand.primary} transparent transparent`,
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      animation: `${spinKeyframes} 1.2s linear infinite`,
    },
  },
});

const dotsContainer = style({
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const dot = style({
  width: "12px",
  height: "12px",
  backgroundColor: vars.color.brand.primary,
  borderRadius: "50%",
  animation: `${pulseKeyframes} 1.4s ease-in-out infinite`,
  selectors: {
    "&:nth-child(1)": {
      animationName: pulseKeyframes,
      animationDuration: "1.4s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      animationName: pulseKeyframes,
      animationDuration: "1.4s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "0.2s",
    },
    "&:nth-child(3)": {
      animationName: pulseKeyframes,
      animationDuration: "1.4s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "0.4s",
    },
  },
});

export const size = recipe({
  base: baseLoader,
  variants: {
    size: {
      sm: { width: "24px", height: "24px" },
      md: { width: "40px", height: "40px" },
      lg: { width: "60px", height: "60px" },
    },
    variant: {
      spinner: spinner,
      dots: dotsContainer,
    },
  },
});

export const loader = baseLoader;
export const spinnerVariant = spinner;
export const dotsVariant = dotsContainer;
export const dotStyle = dot;