import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidBlurOptions = ConvertSettingsValidator.isValidBlurOptions

describe('@utils/ConvertSettingsValidator.isValidBlurOptions', () => {
  it('should return true for null', () => {
    expect(isValidBlurOptions(null)).toBe(true)
  })

  it('should return true for valid blur options object', () => {
    expect(isValidBlurOptions({ value: false, sigma: 5 })).toBe(true)
    expect(isValidBlurOptions({ value: true, sigma: 2 })).toBe(true)
  })

  it('should return false for invalid blur options object', () => {
    expect(isValidBlurOptions(undefined)).toBe(false)
    expect(isValidBlurOptions({})).toBe(false)
    expect(isValidBlurOptions([])).toBe(false)
    expect(isValidBlurOptions(new Map())).toBe(false)
    expect(isValidBlurOptions({ value: true })).toBe(false)
    expect(
      isValidBlurOptions({
        value: {
          sigma: 0
        }
      })
    ).toBe(false)
    expect(isValidBlurOptions({ sigma: 0 })).toBe(false)
    expect(isValidBlurOptions({ sigma: true })).toBe(false)
  })
})
