import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 50,
  backgroundColor: vars.color.background.tertiary,
  // backdropFilter: "saturate(180%) blur(20px)",
  // margin: `0 ${vars.spacing["16"]}`,
  borderBottom: `1px solid ${vars.color.gray[200]}`,

  "@media": {
    "screen and (max-width: 767px)": {
      background: vars.color.background.tertiary,
    },
  },
});

export const backgroundPattern = style({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  backgroundImage: `
    repeating-linear-gradient(
      to right,
      ${vars.color.gray["300"]} 0px,
      ${vars.color.gray["300"]} 1px,
      transparent 1px,
      transparent calc(100% / 24)
    )
  `,
  backgroundSize: "100% 100%",
  opacity: 0.15,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `${vars.spacing["16"]}`,
  position: "relative",
});

export const content = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media": {
    "screen and (max-width: 767px)": {
      gap: vars.spacing["16"],
      flexDirection: "column",
    },
  },
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["12"],
  "@media": {
    "screen and (min-width: 640px)": {
      gap: vars.spacing["16"],
    },
  },
});
