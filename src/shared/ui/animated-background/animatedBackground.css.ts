import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const float = keyframes({
  "0%": {
    transform: "translateY(0) rotate(0deg)",
    opacity: 0.7,
  },
  "50%": {
    transform: "translateY(-20px) rotate(180deg)",
    opacity: 0.4,
  },
  "100%": {
    transform: "translateY(0) rotate(360deg)",
    opacity: 0.7,
  },
});

export const container = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 0,
  overflow: "hidden",
});

export const icon = style({
  position: "absolute",
  color: vars.color.gray["300"],
  opacity: 0.7,
  animationName: float,
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  selectors: {
    "&:nth-child(odd)": {
      color: vars.color.gray["400"],
    },
    "&:nth-child(3n)": {
      color: vars.color.gray["300"],
      opacity: 0.5,
    },
  },
});

export const iconSvg = style({
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
});
