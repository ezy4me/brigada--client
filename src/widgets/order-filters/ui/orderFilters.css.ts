import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const container = style({
  width: "250px",
  padding: vars.spacing["24"],
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.default}`,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["24"],

  "@media": {
    "screen and (max-width: 767px)": {
      width: "100%",
      marginBottom: vars.spacing["24"],
    },
  },
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const sectionTitle = style({
  fontSize: vars.font.size.h4,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing["8"],
});

export const rangeInputs = style({
  display: "flex",
  gap: vars.spacing["8"],
  alignItems: "center",
});

export const input = style({
//   flex: 1,
//   padding: vars.spacing["8"],
//   borderRadius: vars.radius.md,
//   border: `1px solid ${vars.color.border.default}`,
//   backgroundColor: vars.color.background.primary,
//   color: vars.color.text.primary,
//   ":focus": {
//     outline: `2px solid ${vars.color.brand.primary}`,
//   },
});

export const keywordInput = style([
//   input,
//   {
//     // marginBottom: vars.spacing["8"],
//   },
]);

export const executorTypeFilter = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const checkboxGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["8"],
  fontSize: vars.font.size.body2,
  color: vars.color.text.primary,
});

export const resetButton = style({
  marginTop: vars.spacing["16"],
});
