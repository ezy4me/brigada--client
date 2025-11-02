import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

const shine = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const section = style({
  padding: `${vars.spacing["48"]} 0`,
  // backgroundColor: vars.color.background.primary,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const intro = style({
  // textAlign: 'center',
  marginBottom: vars.spacing["24"],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  maxWidth: "700px",
  // margin: '0 auto',
});

export const benefitsList = style({
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  marginTop: vars.spacing["32"],
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.spacing["24"],
});

export const benefitItem = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
  gap: vars.spacing["12"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundImage: `linear-gradient(135deg, ${vars.color.background.secondary} 0%, ${vars.color.gray["100"]} 100%)`,
  position: "relative",
  overflow: "hidden",
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
    [`${benefitItem}:hover &`]: {
      opacity: 1,
      animation: `${shine} 0.6s ease-out forwards`,
    },
  },
});

export const benefitIcon = style({
  flexShrink: 0,
  padding: vars.spacing["24"],
  backgroundColor: vars.color.brand.secondary,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.text.inverted,
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.bold,
});

export const benefitText = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.tight,
});
