export const THEME_COOKIE_NAME = 'scissors-theme'
export const THEME_LS_KEY = THEME_COOKIE_NAME
export const THEME_COLOR_COOKIE_NAME = 'scissors-theme-color'
export const THEME_COLOR_LS_KEY = THEME_COLOR_COOKIE_NAME

/*
 * https://www.radix-ui.com/themes/docs/theme/breakpoints
 */
export const BREAKPOINTS_MIN_WIDTH = {
  xs: 520,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1640
} as const
export const BREAKPOINTS_MAX_WIDTH = {
  xs: BREAKPOINTS_MIN_WIDTH.xs - 1,
  sm: BREAKPOINTS_MIN_WIDTH.sm - 1,
  md: BREAKPOINTS_MIN_WIDTH.md - 1,
  lg: BREAKPOINTS_MIN_WIDTH.lg - 1,
  xl: BREAKPOINTS_MIN_WIDTH.xl - 1
} as const
