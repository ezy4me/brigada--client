import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.family,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.normal,
});

globalStyle("h1", {
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.medium,
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
});
