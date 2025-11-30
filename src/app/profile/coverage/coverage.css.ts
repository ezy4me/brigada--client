import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
  width: "100%",
  padding: `0 ${vars.spacing["16"]}`,
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

export const coverageCard = style({
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
});

export const searchInput = style({});

export const selectedRegions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing["8"],
  marginBottom: vars.spacing["16"],
});

export const regionBadge = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.black,
});

export const regionBadgeText = style({
  fontSize: vars.font.size.caption,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.inverted,
});

export const removeButton = style({
  width: vars.spacing["24"],
  height: vars.spacing["24"],
  padding: 0,
});

export const regionList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
  maxHeight: "200px",
  overflowY: "auto",
  marginTop: vars.spacing["8"],
  padding: vars.spacing["8"],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.primary,
});

export const regionItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.spacing["8"]} ${vars.spacing["12"]}`,
  borderRadius: vars.radius.md,
  ":hover": {
    backgroundColor: vars.color.background.tertiary,
  },
});

export const addButton = style({
  minWidth: "80px",
});
