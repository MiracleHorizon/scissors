import { MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isGammaValid', () => {
  const isGammaValid = SettingsValidator.isGammaValid

  it('should return true for null', () => {
    expect(isGammaValid(null)).toBe(true)
  })

  it('should return true for valid gamma options object', () => {
    expect(isGammaValid(MIN_GAMMA)).toBe(true)
    expect(isGammaValid(MIN_GAMMA + 0.001)).toBe(true)
    expect(isGammaValid(MAX_GAMMA)).toBe(true)
    expect(isGammaValid(MAX_GAMMA - 0.001)).toBe(true)
  })

  it('should return false for invalid gamma options object', () => {
    expect(isGammaValid(undefined)).toBe(false)
    expect(isGammaValid({})).toBe(false)
    expect(isGammaValid([])).toBe(false)
    expect(isGammaValid(true)).toBe(false)
    expect(isGammaValid(new Map())).toBe(false)
    expect(isGammaValid(MIN_GAMMA - 1)).toBe(false)
    expect(isGammaValid(MAX_GAMMA + 1)).toBe(false)
  })
})
