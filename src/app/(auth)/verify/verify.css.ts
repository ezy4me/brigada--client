import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  // padding: `${vars.spacing["48"]} 0`,
  backgroundColor: vars.color.background.primary,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const page = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: vars.spacing["16"],
  // background: `linear-gradient(135deg, ${vars.color.gray["800"]} 0%, ${vars.color.gray["700"]} 100%)`,
  // backgroundSize: "200% 200%",
  position: "relative",
  overflow: "hidden",
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["0"]}`,
});

export const card = style({
  maxWidth: "500px",
  margin: "0 auto",
  // padding: vars.spacing["32"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  position: "relative",
  overflow: "hidden",
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["24"],
  "@media": {
    "screen and (max-width: 767px)": {
      padding: vars.spacing["16"],
    },
  },
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  textAlign: "center",
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  textAlign: "center",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["24"],
  width: "100%",
});

export const codeInputs = style({
  display: "flex",
  gap: vars.spacing["12"],
  width: "100%",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 767px)": {
      gap: vars.spacing["4"],
    },
  },
});

export const inputWrapper = style({
  position: "relative",
  width: "56px",
  height: "56px",
  "@media": {
    "screen and (max-width: 767px)": {
      width: "40px",
      height: "40px",
    },
  },
});

export const codeInput = style({
  width: "100%",
  height: "100%",
  textAlign: "center",
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background.primary,
  outline: "none",
  caretColor: vars.color.brand.primary,
  ":focus": {
    borderColor: vars.color.brand.primary,
    boxShadow: `0 0 0 2px ${vars.color.brand.primary}40`,
  },
  ":hover": {
    borderColor: vars.color.text.secondary,
  },
});
