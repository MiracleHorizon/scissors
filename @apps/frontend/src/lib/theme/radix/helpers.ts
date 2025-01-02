export const getRadixSpaceVar = (space: number): string => `var(--space-${space})`
export const getRadixColorVar = (color: string, number: number): string =>
  `var(--${color}-${number})`
