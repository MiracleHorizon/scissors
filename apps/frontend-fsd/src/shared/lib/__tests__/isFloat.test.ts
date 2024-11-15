import { isFloat } from '@/shared/lib'

describe('shared/lib - isFloat', () => {
  it('should return true if the value is a float', () => {
    expect(isFloat(0.5)).toBe(true)
    expect(isFloat(1.5)).toBe(true)
    expect(isFloat(-2.35)).toBe(true)
    expect(isFloat(34.3219)).toBe(true)
  })

  it('should return false if the value is not a float', () => {
    expect(isFloat(1)).toBe(false)
    expect(isFloat(12)).toBe(false)
    expect(isFloat(-40)).toBe(false)
  })
})
