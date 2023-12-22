import type { RadixThemeColor } from './radix/types'

export type Theme = 'light' | 'dark'

export interface ThemeColorItem {
  key: string
  color: RadixThemeColor
}

export interface ThemeProps {
  theme: Theme
  themeColor: RadixThemeColor
}
