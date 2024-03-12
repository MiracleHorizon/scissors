import type { RadixThemeColor as ThemeColor } from './radix/types'

export type { ThemeColor }

export type Theme = 'light' | 'dark'

export interface ThemeColorItem {
  key: string
  color: ThemeColor
}

export interface ThemeProps {
  theme: Theme
  themeColor: ThemeColor
}
