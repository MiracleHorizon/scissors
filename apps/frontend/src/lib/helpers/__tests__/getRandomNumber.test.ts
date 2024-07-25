import { getRandomNumber } from '@helpers/getRandomNumber'

describe('helpers - getRandomNumber', () => {
  it.each([
    [0, 0],
    [0, 10, 2],
    [20, 35],
    [-10, 20],
    [10, 10]
  ])('should return a random number value', (...args) => {
    const [from, to, precision] = args
    const result = getRandomNumber(from, to, precision)
    expect(result).not.toBeLessThan(from)
    expect(result).not.toBeGreaterThan(to)
  })
})
