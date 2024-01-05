import { describe, expect, it } from 'vitest'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'

describe('@utils/YupSettingsValidator.isNegateValid', () => {
  const isNegateValid = YupSettingsValidator.isNegateValid

  it('should return true for null', () => {
    expect(isNegateValid(null)).toBe(true)
  })

  it('should return true for valid negate options object', () => {
    expect(isNegateValid({ value: true, alpha: true })).toBe(true)
    expect(isNegateValid({ value: false, alpha: true })).toBe(true)
    expect(isNegateValid({ value: false, alpha: false })).toBe(true)
  })

  it('should return false for invalid negate options object', () => {
    expect(isNegateValid(undefined)).toBe(false)
    expect(isNegateValid({})).toBe(false)
    expect(isNegateValid([])).toBe(false)
    expect(isNegateValid(new Map())).toBe(false)
    expect(isNegateValid({ value: true })).toBe(false)
    expect(isNegateValid({ alpha: true })).toBe(false)
  })
})
