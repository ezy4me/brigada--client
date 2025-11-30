import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  backgroundColor: vars.color.background.tertiary,
  width: "100%",
  backgroundImage: 'url("/bg.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.spacing["24"],
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const locationBlock = style({
  display: "flex",
  gap: vars.spacing["8"],
  color: vars.color.text.primary,
  fontSize: vars.font.size.body1,
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

export const city = style({
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.primary,
});

export const cityIcon = style({
  width: vars.spacing["20"],
  height: vars.spacing["20"],
  color: vars.color.brand.primary,
  flexShrink: 0,
});

export const title = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.tight,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (min-width: 1024px)": {
      fontSize: "56px",
    },
  },
});

export const popularRequests = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["12"],
  justifyContent: "flex-start",
  width: "100%",
});

export const requestTag = style({
  padding: `${vars.spacing["4"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.secondary,
  color: vars.color.text.primary,
  fontSize: vars.font.size.body2,
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.background.tertiary,
  },
});

export const searchContainer = style({
  width: "100%",
  display: "flex",
  gap: vars.spacing["16"],
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
    },
  },
});

export const inputRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  width: "100%",
});

export const button = style({
  "@media": {
    "screen and (min-width: 768px)": {
      minWidth: "200px",
    },
  },
});

export const stats = style({
  display: "flex",
  gap: vars.spacing["24"],
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: "100%",
});

export const statItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
});

export const statIcon = style({
  color: vars.color.brand.primary,
  flexShrink: 0,
});
