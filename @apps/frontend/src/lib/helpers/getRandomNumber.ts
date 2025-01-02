const MIN_FIX = 0
const MAX_FIX = 100

export const getRandomNumber = (min: number, max: number, fix: number = 0): number => {
  let randomValue = Math.random() * (max - min) + min

  if (fix < MIN_FIX) {
    fix = MIN_FIX
  }
  if (fix > MAX_FIX) {
    fix = MAX_FIX
  }

  randomValue = parseFloat(randomValue.toFixed(fix))

  return randomValue
}
