import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  gap: vars.spacing["24"],
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
//   padding: `0 ${vars.spacing["16"]}`,

  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
    },
  },
});

export const filtersColumn = style({
  width: "250px",
  "@media": {
    "screen and (max-width: 767px)": {
      width: "100%",
    },
  },
});

export const resultsColumn = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],
});