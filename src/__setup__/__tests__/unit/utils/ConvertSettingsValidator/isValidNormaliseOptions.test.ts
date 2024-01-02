import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidNormaliseOptions = ConvertSettingsValidator.isValidNormaliseOptions

describe('@utils/ConvertSettingsValidator.isValidNormaliseOptions', () => {
  it('should return true for null', () => {
    expect(isValidNormaliseOptions(null)).toBe(true)
  })

  it('should return true for valid normalise options object', () => {
    expect(isValidNormaliseOptions({ lower: 33, upper: 99 })).toBe(true)
  })

  it('should return false for invalid normalise options object', () => {
    expect(isValidNormaliseOptions(undefined)).toBe(false)
    expect(isValidNormaliseOptions({})).toBe(false)
    expect(isValidNormaliseOptions([])).toBe(false)
    expect(isValidNormaliseOptions(new Map())).toBe(false)
    expect(isValidNormaliseOptions({ lower: 1 })).toBe(false)
    expect(isValidNormaliseOptions({ lower: '-1' })).toBe(false)
    expect(isValidNormaliseOptions({ lower: 1, upper: 'foo' })).toBe(false)
    expect(isValidNormaliseOptions({ upper: 6, lower: 'bar' })).toBe(false)
    expect(isValidNormaliseOptions({ upper: 'baz' })).toBe(false)
  })
})
