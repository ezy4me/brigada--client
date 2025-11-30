import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const page = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  // backgroundColor: vars.color.background.secondary,
  zIndex: 1,
  position: "relative",
});
