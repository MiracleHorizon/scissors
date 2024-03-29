import { MAX_NORMALISE, MIN_NORMALISE } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isNormaliseValid', () => {
  const isNormaliseValid = SettingsValidator.isNormaliseValid

  it('should return true for null', () => {
    expect(isNormaliseValid(null)).toBe(true)
  })

  it('should return true for valid normalise options object', () => {
    expect(isNormaliseValid({ lower: 33, upper: 76 })).toBe(true)
    expect(isNormaliseValid({ lower: MIN_NORMALISE, upper: MAX_NORMALISE })).toBe(true)
  })

  it('should return false for invalid normalise options object', () => {
    expect(isNormaliseValid(undefined)).toBe(false)
    expect(isNormaliseValid({})).toBe(false)
    expect(isNormaliseValid([])).toBe(false)
    expect(isNormaliseValid(new Map())).toBe(false)
    expect(isNormaliseValid({ lower: MIN_NORMALISE - 1 })).toBe(false)
    expect(isNormaliseValid({ lower: 2 })).toBe(false)
    expect(isNormaliseValid({ lower: '-1' })).toBe(false)
    expect(isNormaliseValid({ lower: 1, upper: 'foo' })).toBe(false)
    expect(isNormaliseValid({ upper: MAX_NORMALISE + 0.001 })).toBe(false)
    expect(isNormaliseValid({ upper: MAX_NORMALISE + 1, lower: MIN_NORMALISE - 1 })).toBe(false)
    expect(isNormaliseValid({ upper: 6, lower: 'bar' })).toBe(false)
    expect(isNormaliseValid({ upper: 'baz' })).toBe(false)
  })
})
