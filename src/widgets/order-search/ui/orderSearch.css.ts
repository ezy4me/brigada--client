// src/widgets/order-search/ui/orderSearch.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  gap: vars.spacing["24"],
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: vars.spacing["16"],
    },
  },
});

export const sidebar = style({
  flex: "0 0 300px",

  "@media": {
    "screen and (max-width: 768px)": {
      flex: "none",
      width: "100%",
    },
  },
});

export const content = style({
  flex: 1,
});