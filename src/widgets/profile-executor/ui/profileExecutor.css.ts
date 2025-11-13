import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  width: "100%",
});

// export const header = style({
//   // textAlign: "center",
//   marginBottom: vars.spacing["32"],
// });

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
});

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.spacing["24"],
  marginBottom: vars.spacing["32"],
});

export const statCard = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  position: "relative",
  overflow: "hidden",
  ":hover": {
    transform: "scale(1.02)",
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
    [`${statCard}:hover &`]: {
      opacity: 1,
      animation: `${shine} 0.6s ease-out forwards`,
    },
  },
});

export const statIcon = style({
  color: vars.color.brand.primary,
});

export const statLabel = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const statValue = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.spacing["16"],
});
