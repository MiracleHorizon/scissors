import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { MAX_GAMMA, MIN_GAMMA } from '@server/Sharp'

describe('@utils/YupSettingsValidator.isGammaValid', () => {
  const isGammaValid = YupSettingsValidator.isGammaValid

  it('should return true for null', () => {
    expect(isGammaValid(null)).toBe(true)
  })

  it('should return true for valid gamma options object', () => {
    expect(isGammaValid({ value: MIN_GAMMA })).toBe(true)
    expect(isGammaValid({ value: MIN_GAMMA + 0.001 })).toBe(true)
    expect(isGammaValid({ value: MAX_GAMMA })).toBe(true)
    expect(isGammaValid({ value: MAX_GAMMA - 0.001 })).toBe(true)
  })

  it('should return false for invalid gamma options object', () => {
    expect(isGammaValid(undefined)).toBe(false)
    expect(isGammaValid({})).toBe(false)
    expect(isGammaValid([])).toBe(false)
    expect(isGammaValid(new Map())).toBe(false)
    expect(isGammaValid({ value: MIN_GAMMA - 1 })).toBe(false)
    expect(isGammaValid({ value: MAX_GAMMA + 1 })).toBe(false)
    expect(isGammaValid({ value: {} })).toBe(false)
    expect(isGammaValid({ value: null })).toBe(false)
    expect(isGammaValid({ value: true })).toBe(false)
  })
})
