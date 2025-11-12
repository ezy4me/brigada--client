import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  width: "100%",
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.secondary,
});

export const notificationsCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["16"],
});

export const notificationItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.spacing["12"]} ${vars.spacing["16"]}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.border.default}`,
  ":hover": {
    backgroundColor: vars.color.background.secondary,
  },
});

export const notificationText = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
});

export const notificationActions = style({
  display: "flex",
  gap: vars.spacing["12"],
});