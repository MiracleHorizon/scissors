import type { RadixThemeColor } from '@/shared/radix'
export type { RadixThemeColor as ThemeColor }

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeColorItem {
  key: string
  color: RadixThemeColor
}
