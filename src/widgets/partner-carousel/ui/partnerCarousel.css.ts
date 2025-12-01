import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  width: "100%",
});

export const container = style({
  padding: `0 ${vars.spacing["16"]}`,
});

export const header = style({
  textAlign: "left",
  marginBottom: vars.spacing["48"],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["12"],
});

export const subtitle = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
  maxWidth: "600px",
});

export const partnerSection = style({
  display: "flex",
  justifyContent: "center",
});

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "500px",
  borderRadius: vars.radius.lg,
  overflow: "hidden",
});

export const partnerImage = style({
  objectFit: "cover",
  zIndex: 0,
});

export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
  zIndex: 1,
});

export const content = style({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  padding: vars.spacing["24"],
});

export const textBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  alignSelf: "flex-start",
});

export const badges = style({
  display: "flex",
  gap: vars.spacing["8"],
  flexWrap: "wrap",
});

export const badge = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.white,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: vars.radius.sm,
  paddingLeft: vars.spacing["8"],
  paddingRight: vars.spacing["8"],
  ":before": {
    content: "•",
    color: vars.color.brand.primary,
    fontSize: vars.font.size.h2,
    lineHeight: 1,
  },
});

export const partnerName = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.white,
});

export const navButtons = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});
