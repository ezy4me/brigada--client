import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  padding: `${vars.spacing["48"]} 0`,
  backgroundColor: vars.color.background.primary,
  width: "100%",
});

export const container = style({
  backgroundColor: vars.color.gray["900"],
  color: vars.color.text.inverted,
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["24"]} ${vars.spacing["24"]}`,

  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "stretch",
  minHeight: "400px",
  "@media": {
    "screen and (max-width: 1023px)": {
      flexDirection: "column",
      gap: vars.spacing["32"],
      minHeight: "auto",
    },
  },
});

export const textContent = style({
  flex: 1,
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  justifyContent: "center",
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.inverted,
  lineHeight: vars.font.lineHeight.tight,
  textAlign: "left",
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.inverted,
  lineHeight: vars.font.lineHeight.loose,
  textAlign: "left",
});

export const imagePlaceholder = style({
  flex: 1,
  display: "flex",
  minHeight: "400px",
  width: "100%",
  borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 1023px)": {
      order: -1,
      minHeight: "300px",
      borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`,
    },
  },
});

export const backgroundImage = style({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  objectFit: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  flex: 1,
  "@media": {
    "screen and (max-width: 1023px)": {
      // hei,
    },
  },
});

export const buttonLink = style({
  alignSelf: "flex-start",
  marginTop: vars.spacing["8"],
});
