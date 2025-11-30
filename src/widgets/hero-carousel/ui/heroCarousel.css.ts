import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  position: "relative",
  height: "600px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

export const container = style({
  position: "relative",
  zIndex: 2,
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const badges = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["12"],
  marginLeft: vars.spacing["16"],
  alignSelf: "flex-start",
  marginTop: vars.spacing["16"],
});

export const badge = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["16"]}`,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverted,
  fontSize: vars.font.size.body2,
  fontWeight: vars.font.weight.medium,
});

export const controls = style({
  position: "absolute",
  bottom: vars.spacing["24"],
  left: vars.spacing["24"],
  display: "flex",
  gap: vars.spacing["12"],
  zIndex: 3,
});

export const navButton = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  border: `1px solid ${vars.color.border.default}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.background.secondary,
  },
});
