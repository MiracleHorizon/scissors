import type { Theme, ThemeColor } from '../model/types'

// Defaults
export const DEFAULT_THEME: Theme = 'system'
export const DEFAULT_THEME_COLOR: ThemeColor = 'indigo'

// Storages
export const THEME_STORAGE_KEY = 'scissors-theme'
export const THEME_COLOR_STORAGE_KEY = 'scissors-theme-color'

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
