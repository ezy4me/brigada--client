import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing[8],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.01)",
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
  alignItems: "center",
  marginBottom: vars.spacing["16"],
});

export const title = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const author = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
});

export const authorName = style({
  fontSize: vars.font.size.body1,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const authorType = style({
  fontSize: vars.font.size.caption,
  color: vars.color.text.secondary,
});

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  color: vars.color.status.success,
});

export const description = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
  lineHeight: vars.font.lineHeight.normal,
  marginBottom: vars.spacing["16"],
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "auto",
});

export const details = style({
  display: "flex",
  gap: vars.spacing["12"],
  alignItems: "center",
});

export const detail = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const actionButton = style({});
