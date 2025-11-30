import { style, keyframes } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.2s ease",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
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
    [`${card}:hover &`]: {
      opacity: 1,
      animation: `${shine} 0.6s ease-out forwards`,
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: vars.spacing["16"],
});

export const titleSection = style({
  flex: 1,
});

export const title = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
  lineHeight: vars.font.lineHeight.tight,
});

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  color: vars.color.status.warning,
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.medium,
});

export const price = style({});

export const priceText = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.primary,
});

export const author = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
});

export const authorName = style({
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const authorType = style({
  color: vars.color.text.secondary,
});

export const description = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  lineHeight: vars.font.lineHeight.normal,
});

export const details = style({
  display: "flex",
  gap: vars.spacing["16"],
  alignItems: "center",
  flexWrap: "wrap",
});

export const detail = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const keywords = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["8"],
});

export const keyword = style({
  padding: `${vars.spacing["4"]} ${vars.spacing["8"]}`,
  backgroundColor: vars.color.background.tertiary,
  color: vars.color.text.primary,
  borderRadius: vars.radius.md,
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.medium,
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "auto",
});

export const actionButton = style({});
