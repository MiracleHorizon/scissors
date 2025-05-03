import { MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isNormaliseValid', () => {
  const isNormaliseValid = SettingsValidator.isNormaliseValid

  it('should return true for null', () => {
    expect(isNormaliseValid(null)).toBe(true)
  })

  it('should return true for valid normalise options object', () => {
    expect(isNormaliseValid({ lower: 33, upper: 76 })).toBe(true)
    expect(isNormaliseValid({ lower: MIN_NORMALIZE, upper: MAX_NORMALIZE })).toBe(true)
  })

  it.each([
    NaN,
    {},
    [],
    new Map(),
    { lower: MIN_NORMALIZE - 1 },
    { lower: 2 },
    { lower: '-1' },
    { lower: 1, upper: 'foo' },
    { upper: MAX_NORMALIZE + 0.001 },
    { upper: MAX_NORMALIZE + 1, lower: MIN_NORMALIZE - 1 },
    { upper: 6, lower: 'bar' },
    { upper: 'baz' }
  ])('should return false for invalid normalise options object (%s)', payload => {
    expect(isNormaliseValid(payload)).toBe(false)
  })
})
