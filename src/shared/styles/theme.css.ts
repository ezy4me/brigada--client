import { createTheme } from '@vanilla-extract/css';
import { semanticColors } from '@/shared/config/colors';
import { radius } from '@/shared/config/radius';
import { spacing } from '@/shared/config/spacing';
import { typography } from '@/shared/config/typography';

export const [themeClass, vars] = createTheme({
  color: {
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
  },
  radius,
  spacing,
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
      body1: typography.fontSize.body1,
      body2: typography.fontSize.body2,
      caption: typography.fontSize.caption,
    },
  },
});