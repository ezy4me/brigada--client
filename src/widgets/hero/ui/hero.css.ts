import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const hero = style({
  position: "relative",
  overflow: "hidden",
  textAlign: "center",

  backgroundColor: vars.color.background.tertiary,
  width: "100%",
  backgroundImage: 'url("/bg.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  // backgroundSize: "cover",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.spacing["20"],
  textAlign: "center",
  position: "relative",
  zIndex: 2,
});

export const heading = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.tight,
  marginTop: vars.spacing["40"],
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "48px",
    },
    "screen and (min-width: 1024px)": {
      fontSize: "56px",
    },
  },
});

export const headingAccent = style({
  color: vars.color.brand.primary,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.loose,
  maxWidth: "800px",
  marginInline: "auto",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: vars.font.size.body2,
    },
  },
});

export const descriptionBreak = style({
  "@media": {
    "screen and (max-width: 639px)": {
      display: "none",
    },
    "screen and (min-width: 640px)": {
      display: "inline",
    },
  },
});

export const subDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["24"],
  maxWidth: "800px",
  marginInline: "auto",
});

export const buttonWrapper = style({});
