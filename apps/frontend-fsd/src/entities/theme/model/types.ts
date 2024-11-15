import type { RadixThemeColor as ThemeColor } from './radix'

export type { ThemeColor }

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeColorItem {
  key: string
  color: ThemeColor
}
