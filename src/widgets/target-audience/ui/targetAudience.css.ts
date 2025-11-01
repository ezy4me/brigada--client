import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const section = style({
  padding: `${vars.spacing["32"]} 0`,
//   backgroundColor: vars.color.background.primary,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.spacing["16"]}`,
});

export const header = style({
  textAlign: "left",
  marginBottom: vars.spacing["24"],
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const description = style({
  fontSize: vars.font.size.body1,
  color: vars.color.text.primary,
  maxWidth: "600px",
  textAlign: "left",

});

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.spacing["24"],
  marginTop: vars.spacing["32"],

  "@media": {
    "screen and (max-width: 1023px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: vars.spacing["24"],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.background.secondary,
});

export const icon = style({
  width: vars.spacing["40"],
  height: vars.spacing["40"],
  marginBottom: vars.spacing["16"],
  color: vars.color.brand.primary,
});

export const cardTitle = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const cardDescription = style({
  fontSize: vars.font.size.body2,
  color: vars.color.text.secondary,
});
