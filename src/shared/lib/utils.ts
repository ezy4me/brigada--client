/**
 * Utility function for conditionally joining CSS class names
 * @param classes - Array of class names, falsy values are filtered out
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}