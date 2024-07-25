export const getRandomNumber = (min: number, max: number, precision?: number): number => {
  const floating = typeof precision === 'number'
  let randomValue = Math.random() * (max - min) + min

  if (floating) {
    randomValue = parseFloat(randomValue.toPrecision(precision))
  }

  return randomValue
}
