import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  backgroundColor: vars.color.background.primary,
  background: vars.color.brand.primary,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing["24"],
});

export const header = style({
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  gap: vars.spacing["8"],
});

export const title = style({
  fontWeight: vars.font.weight.bold,
  color: vars.color.white,
});

export const subtitle = style({
  color: vars.color.white,
});

export const tariffsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.spacing["24"],
  width: "100%",
  marginTop: vars.spacing["32"],

  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "1fr",
      maxWidth: "400px",
    },
  },
});

export const tariffCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  gap: vars.spacing["16"],
  textAlign: "center",
});

export const tariffHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

export const tariffTitle = style({
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const tariffSubtitle = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: vars.color.border.default,
});

export const featuresList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  width: "100%",
});

export const featureItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
  //   ":before": {
  //     content: "•",
  //     color: vars.color.brand.primary,
  //     fontSize: vars.font.size.h2,
  //     lineHeight: 1,
  //   },
});

export const featureItemIcon = style({
  color: vars.color.brand.primary,
  fontSize: vars.font.size.h2,
  lineHeight: 1,
});

export const price = style({
  //   fontWeight: vars.font.weight.bold,
  color: vars.color.text.inverted,
});

export const button = style({
  marginTop: "auto",
});
