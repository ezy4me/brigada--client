import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const wrapper = style({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  display: "grid",
  gridTemplateColumns: "repeat(24, 1fr)",
  gap: vars.spacing["8"],
  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(18, 1fr)",
    },
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(12, 1fr)",
    },
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "repeat(6, 1fr)",
    },
  },
});

export const line = style({
  width: "1px",
  height: "100%",
  backgroundColor: vars.color.gray[600],
  opacity: 0.01,
});
