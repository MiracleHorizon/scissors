export const getRadixColorVar = (color: string, number: number): string =>
  `var(--${color}-${number})`
