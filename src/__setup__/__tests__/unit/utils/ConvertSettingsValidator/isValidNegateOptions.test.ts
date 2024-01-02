import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidNegateOptions = ConvertSettingsValidator.isValidNegateOptions

describe('@utils/ConvertSettingsValidator.isValidNegateOptions', () => {
  it('should return true for null', () => {
    expect(isValidNegateOptions(null)).toBe(true)
  })

  it('should return true for valid negate options object', () => {
    expect(isValidNegateOptions({ value: true, alpha: true })).toBe(true)
    expect(isValidNegateOptions({ value: false, alpha: true })).toBe(true)
    expect(isValidNegateOptions({ value: false, alpha: false })).toBe(true)
  })

  it('should return false for invalid negate options object', () => {
    expect(isValidNegateOptions(undefined)).toBe(false)
    expect(isValidNegateOptions({})).toBe(false)
    expect(isValidNegateOptions([])).toBe(false)
    expect(isValidNegateOptions(new Map())).toBe(false)
    expect(isValidNegateOptions({ value: true })).toBe(false)
    expect(isValidNegateOptions({ alpha: true })).toBe(false)
  })
})
