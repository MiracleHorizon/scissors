import type { RadixThemeColor as Color } from './types'

export const getRadixSpaceVar = (space: number): string => `var(--space-${space})`
export const getRadixColorVar = (color: Color, number: number): string =>
  `var(--${color}-${number})`
