import random from 'lodash.random'

export const getRandomNumber = (min: number, max: number, precision?: number): number => {
  const floating = typeof precision === 'number'
  let randomValue = random(min, max, floating)

  if (floating) {
    randomValue = parseFloat(randomValue.toPrecision(precision))
  }

  return randomValue
}
