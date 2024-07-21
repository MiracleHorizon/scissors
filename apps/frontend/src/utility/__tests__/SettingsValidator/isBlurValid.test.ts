import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isBlurValid', () => {
  const isBlurValid = SettingsValidator.isBlurValid

  it('should return true for null', () => {
    expect(isBlurValid(null)).toBe(true)
  })

  it.each([
    { value: false, sigma: 5 },
    { value: true, sigma: 2 },
    { value: true, sigma: MIN_BLUR_SIGMA },
    { value: true, sigma: MAX_BLUR_SIGMA },
    { value: true, sigma: null }
  ])('should return true for invalid blur options object (%s)', payload => {
    expect(isBlurValid(payload)).toBe(true)
  })

  it.each([
    NaN,
    {},
    [],
    { value: true },
    { value: { sigma: 0 } },
    { sigma: 0 },
    { sigma: true },
    { value: true, sigma: MIN_BLUR_SIGMA - 0.1 },
    { value: true, sigma: MAX_BLUR_SIGMA + 0.1 }
  ])('should return false for invalid blur options object (%s)', payload => {
    expect(isBlurValid(payload)).toBe(false)
  })
})
