import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const section = style({
  // padding: `${vars.spacing["32"]} 0`,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  // padding: `0 ${vars.spacing["16"]}`,
});

export const loadingContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
});

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  textAlign: "center",
  gap: vars.spacing["16"],
});