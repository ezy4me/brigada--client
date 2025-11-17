import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const section = style({
  //   backgroundColor: vars.color.background.primary,
  width: "100%",
});

export const container = style({
  padding: `0 ${vars.spacing["16"]}`,
});

export const header = style({
  textAlign: "left",
  marginBottom: vars.spacing["48"],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["12"],
});

export const subtitle = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  maxWidth: "600px",
});

export const stepsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.spacing["24"],

  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "screen and (max-width: 767px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const stepCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0,
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundImage: `linear-gradient(135deg, ${vars.color.background.secondary} 0%, ${vars.color.gray["100"]} 100%)`,
  position: "relative",
  overflow: "hidden",
  height: "100%",
  transition: "transform 0.2s ease",
  selectors: {
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
});

export const shineElement = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(120deg, 
    rgba(255, 255, 255, 0) 30%, 
    rgba(255, 255, 255, 0.8) 50%, 
    rgba(255, 255, 255, 0) 70%
  )`,
  transform: "translateX(-100%)",
  zIndex: 1,
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.2s ease",

  selectors: {
    [`${stepCard}:hover &`]: {
      opacity: 1,
      animation: `${shine} 0.6s ease-out forwards`,
    },
  },
});

export const stepNumber = style({
  width: vars.spacing["32"],
  height: vars.spacing["32"],
  borderRadius: "50%",
  backgroundColor: vars.color.black,
  color: vars.color.text.inverted,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size.body1,
  marginBottom: vars.spacing["20"],

});

export const stepIcon = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  color: vars.color.brand.primary,
  flexShrink: 0,
});

export const stepTitle = style({
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const stepDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  lineHeight: vars.font.lineHeight.normal,
});
