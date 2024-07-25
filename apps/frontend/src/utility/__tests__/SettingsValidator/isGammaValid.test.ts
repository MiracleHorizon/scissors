import { MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isGammaValid', () => {
  const isGammaValid = SettingsValidator.isGammaValid

  it('should return true for null', () => {
    expect(isGammaValid(null)).toBe(true)
  })

  it.each([MIN_GAMMA, MAX_GAMMA, MIN_GAMMA + 0.001, MAX_GAMMA - 0.001])(
    'should return true for valid gamma value (%s)',
    value => {
      expect(isGammaValid(value)).toBe(true)
    }
  )

  it.each([
    NaN,
    {},
    [],
    true,
    { value: { gamma: 0 } },
    { gamma: 0 },
    { gamma: true },
    { value: true, gamma: MIN_GAMMA - 0.1 },
    { value: true, gamma: MAX_GAMMA + 0.1 }
  ])('should return false for invalid gamma value (%s)', value => {
    expect(isGammaValid(value)).toBe(false)
  })
})
