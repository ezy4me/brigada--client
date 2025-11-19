import { createTheme } from "@vanilla-extract/css";
import { colorPalette, semanticColors } from "@/shared/config/colors";
import { radius } from "@/shared/config/radius";
import { spacing } from "@/shared/config/spacing";
import { typography } from "@/shared/config/typography";
import { shadow } from "@shared/config/shadow";

export const [themeClass, vars] = createTheme({
  color: {
    white: colorPalette.white,
    black: colorPalette.black,
    background: {
      primary: semanticColors.background.primary,
      secondary: semanticColors.background.secondary,
      tertiary: semanticColors.background.tertiary,
    },
    text: {
      primary: semanticColors.text.primary,
      secondary: semanticColors.text.secondary,
      inverted: semanticColors.text.inverted,
    },
    border: {
      default: semanticColors.border.default,
      strong: semanticColors.border.strong,
    },
    brand: {
      primary: semanticColors.brand.primary,
      secondary: semanticColors.brand.secondary,
    },
    status: {
      success: semanticColors.status.success,
      warning: semanticColors.status.warning,
      error: semanticColors.status.error,
    },
    gray: {
      "50": colorPalette.gray50,
      "100": colorPalette.gray100,
      "200": colorPalette.gray200,
      "300": colorPalette.gray300,
      "400": colorPalette.gray400,
      "500": colorPalette.gray500,
      "600": colorPalette.gray600,
      "700": colorPalette.gray700,
      "800": colorPalette.gray800,
      "900": colorPalette.gray900,
    },
    red: {
      "50": colorPalette.red50,
      "100": colorPalette.red100,
      "200": colorPalette.red200,
      "300": colorPalette.red300,
      "500": colorPalette.red500,
      "600": colorPalette.red600,
      "700": colorPalette.red700,
    },
    blue: {
      "50": colorPalette.blue50,
      "100": colorPalette.blue100,
      "200": colorPalette.blue200,
      "300": colorPalette.blue300,
      "500": colorPalette.blue500,
      "600": colorPalette.blue600,
      "700": colorPalette.blue700,
    },
  },
  radius,
  spacing,
  shadow,
  font: {
    family: typography.fontFamily.sans,
    lineHeight: {
      tight: typography.lineHeight.tight,
      normal: typography.lineHeight.normal,
      loose: typography.lineHeight.loose,
    },
    weight: {
      regular: typography.fontWeight.regular,
      medium: typography.fontWeight.medium,
      bold: typography.fontWeight.bold,
    },
    size: {
      h1: typography.fontSize.h1,
      h1Sm: typography.fontSize.h1Sm,
      h2: typography.fontSize.h2,
      h2Sm: typography.fontSize.h2Sm,
      h3: typography.fontSize.h3,
      h4: typography.fontSize.h4,
      body1: typography.fontSize.body1,
      body2: typography.fontSize.body2,
      caption: typography.fontSize.caption,
    },
  },
});
