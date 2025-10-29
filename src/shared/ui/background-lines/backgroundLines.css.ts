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
  gridTemplateColumns: `repeat(23, 1fr)`,
  gap: vars.spacing["8"],
  "@media": {
    "screen and (max-width: 767px)": {
      gridTemplateColumns: `repeat(12, 1fr)`,
    },
  },
});

export const line = style({
  width: "1px",
  height: "100%",
  backgroundColor: vars.color.black,
  opacity: 0.1,
});
