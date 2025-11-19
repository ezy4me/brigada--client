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
  position: "relative",
});

globalStyle("h1", {
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.medium,
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("button, input, textarea, select", {
  font: "inherit",
  border: "none",
  outline: "none",
  background: "transparent",
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

globalStyle("p", {
  margin: 0,
});

globalStyle("h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: vars.font.weight.medium,
});
