import { style, keyframes } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
});

const float = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-10px)" },
});

export const page = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", 
});

export const section = style({
  display: "flex",
  justifyContent: "center", 
  alignItems: "center", 
  flexGrow: 1,
  padding: vars.spacing["24"],
});

export const card = style({
  width: "100%",
  maxWidth: "500px", 
  textAlign: "center", 
  position: "relative",
  overflow: "hidden", 
});

export const floatingCard = style([
  card,
  style({
    animation: `${float} 3s ease-in-out infinite`,
  }),
]);

export const content = style({
  padding: vars.spacing["40"],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["16"],
  "@media": {
    "screen and (max-width: 767px)": {
      padding: vars.spacing["24"],
    },
  },
});

export const loaderContainer = style({
  marginBottom: vars.spacing["16"],
});

export const title = style({
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  color: vars.color.text.secondary,
  fontSize: vars.font.size.body2,
});