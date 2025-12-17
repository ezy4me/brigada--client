import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle(":root", {
  colorScheme: "light dark",
});

globalStyle("html", {
  transition: "background-color 0.3s ease, color 0.3s ease",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.family,
  backgroundColor: vars.color.dark,
  color: vars.color.text.primary,
  lineHeight: vars.font.lineHeight.normal,
  position: "relative",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("h1", {
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.medium,
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
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
  margin: 0,
  padding: 0,
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

globalStyle("#__next", {
  height: "100%",
});

globalStyle("main", {
  flex: 1,
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.brand.primary}`,
  outlineOffset: "2px",
});

globalStyle("*", {
  transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
});
