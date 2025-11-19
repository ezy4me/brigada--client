import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: vars.color.background.primary,
});

export const main = style({
  flex: 1,
  display: "flex",
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",

  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
    },
  },
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: vars.spacing["24"],

  "@media": {
    "screen and (max-width: 768px)": {
      paddingBottom: vars.spacing["96"],
    },
  },
});
