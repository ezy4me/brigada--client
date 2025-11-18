import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const section = style({
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

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.spacing["24"],
  marginTop: vars.spacing["32"],

  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const cardLink = style({
  textDecoration: "none",
  ":hover": {
    textDecoration: "none",
  },
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundImage: `linear-gradient(135deg, ${vars.color.background.secondary} 0%, ${vars.color.gray["100"]} 100%)`,
  position: "relative",
  overflow: "hidden",
  height: "100%",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.02)",
  },
  cursor: "pointer",
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
    [`${card}:hover &`]: {
      opacity: 1,
      animation: `${shine} 0.6s ease-out forwards`,
    },
  },
});

export const icon = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  marginBottom: vars.spacing["16"],
  color: vars.color.brand.secondary,
});

export const cardTitle = style({
  marginBottom: vars.spacing["8"],
});

export const cardDescription = style({});
