import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const settingCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  position: "relative",
  overflow: "hidden",
  ":hover": {
    transform: "scale(1.01)",
    transition: "transform 0.2s ease",
  },
});

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const cardTitle = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const cardDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});

export const cardContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: vars.spacing["16"],
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const accountsList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
  width: "100%",
});

export const accountItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.spacing["12"],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.spacing["12"],
    },
  },
});

export const accountInfo = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["12"],
});

export const accountAvatar = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
});

export const accountName = style({
  fontSize: vars.font.size.body1,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const accountRole = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});
