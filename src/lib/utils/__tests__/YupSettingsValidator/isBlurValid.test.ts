import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@server/sharp'

describe('@utils/YupSettingsValidator.isBlurValid', () => {
  const isBlurValid = YupSettingsValidator.isBlurValid

  it('should return true for null', () => {
    expect(isBlurValid(null)).toBe(true)
  })

  it('should return true for valid blur options object', () => {
    expect(isBlurValid({ value: false, sigma: 5 })).toBe(true)
    expect(isBlurValid({ value: true, sigma: 2 })).toBe(true)
    expect(isBlurValid({ value: true, sigma: MIN_BLUR_SIGMA })).toBe(true)
    expect(isBlurValid({ value: true, sigma: MAX_BLUR_SIGMA })).toBe(true)
    expect(isBlurValid({ value: true, sigma: null })).toBe(true)
  })

  it('should return false for invalid blur options object', () => {
    expect(isBlurValid(undefined)).toBe(false)
    expect(isBlurValid({})).toBe(false)
    expect(isBlurValid([])).toBe(false)
    expect(isBlurValid(new Map())).toBe(false)
    expect(isBlurValid({ value: true })).toBe(false)
    expect(isBlurValid({ value: { sigma: 0 } })).toBe(false)
    expect(isBlurValid({ sigma: 0 })).toBe(false)
    expect(isBlurValid({ sigma: true })).toBe(false)
    expect(isBlurValid({ value: true, sigma: MIN_BLUR_SIGMA - 0.00001 })).toBe(false)
    expect(isBlurValid({ value: true, sigma: MAX_BLUR_SIGMA + 0.00001 })).toBe(false)
  })
})
