import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidGammaOptions = ConvertSettingsValidator.isValidGammaOptions

describe('isValidGammaOptions', () => {
  it('should return true for null', () => {
    expect(isValidGammaOptions(null)).toBe(true)
  })

  it('should return true for valid gamma options object', () => {
    expect(isValidGammaOptions({ value: 0 })).toBe(true)
    expect(isValidGammaOptions({ value: 8 })).toBe(true)
  })

  it('should return false for invalid gamma options object', () => {
    expect(isValidGammaOptions(undefined)).toBe(false)
    expect(isValidGammaOptions({})).toBe(false)
    expect(isValidGammaOptions([])).toBe(false)
    expect(isValidGammaOptions(new Map())).toBe(false)
    expect(isValidGammaOptions({ value: {} })).toBe(false)
    expect(isValidGammaOptions({ value: null })).toBe(false)
    expect(isValidGammaOptions({ value: true })).toBe(false)
  })
})
