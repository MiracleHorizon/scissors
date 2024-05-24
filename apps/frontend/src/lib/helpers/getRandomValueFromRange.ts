export const getRandomValueFromRange = (from: number, to: number): number =>
  Math.random() * (to - from) + from
