import { getRandomNumber } from '@helpers/getRandomNumber'

describe('helpers - getRandomNumber', () => {
  it.each([
    [0, 0],
    [0, 10, 2],
    [20, 35],
    [-10, 20, -1],
    [10, 10]
  ])('should return a random number value', (...args) => {
    const [from, to, fix] = args
    const result = getRandomNumber(from, to, fix)

    expect(result).not.toBeLessThan(from)
    expect(result).not.toBeGreaterThan(to)
  })
})
