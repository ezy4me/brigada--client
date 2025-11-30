import { createTheme } from "@vanilla-extract/css";

import { colorPalette, lightSemanticColors, darkSemanticColors } from "@/shared/config/colors";
import { radius } from "@/shared/config/radius";
import { shadow } from "@/shared/config/shadow";
import { spacing } from "@/shared/config/spacing";
import { typography } from "@/shared/config/typography";

export const [themeClass, vars] = createTheme({
  color: {
    white: colorPalette.white,
    black: colorPalette.black,
    background: {
      primary: lightSemanticColors.background.primary,
      secondary: lightSemanticColors.background.secondary,
      tertiary: lightSemanticColors.background.tertiary,
    },
    text: {
      primary: lightSemanticColors.text.primary,
      secondary: lightSemanticColors.text.secondary,
      inverted: lightSemanticColors.text.inverted,
    },
    border: {
      default: lightSemanticColors.border.default,
      strong: lightSemanticColors.border.strong,
    },
    brand: {
      primary: lightSemanticColors.brand.primary,
      secondary: lightSemanticColors.brand.secondary,
    },
    status: {
      success: lightSemanticColors.status.success,
      warning: lightSemanticColors.status.warning,
      error: lightSemanticColors.status.error,
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

export const darkThemeClass = createTheme(vars, {
  color: {
    white: colorPalette.white,
    black: colorPalette.black,
    background: {
      primary: darkSemanticColors.background.primary,
      secondary: darkSemanticColors.background.secondary,
      tertiary: darkSemanticColors.background.tertiary,
    },
    text: {
      primary: darkSemanticColors.text.primary,
      secondary: darkSemanticColors.text.secondary,
      inverted: darkSemanticColors.text.inverted,
    },
    border: {
      default: darkSemanticColors.border.default,
      strong: darkSemanticColors.border.strong,
    },
    brand: {
      primary: lightSemanticColors.brand.primary,
      secondary: lightSemanticColors.brand.secondary,
    },
    status: {
      success: lightSemanticColors.status.success,
      warning: lightSemanticColors.status.warning,
      error: lightSemanticColors.status.error,
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
