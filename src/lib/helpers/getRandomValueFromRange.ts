export function getRandomValueFromRange(from: number, to: number): number {
  return Math.random() * (to - from) + from
}
