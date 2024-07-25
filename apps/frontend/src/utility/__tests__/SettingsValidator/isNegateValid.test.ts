import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isNegateValid', () => {
  const isNegateValid = SettingsValidator.isNegateValid

  it('should return true for null', () => {
    expect(isNegateValid(null)).toBe(true)
  })

  it.each([
    { value: true, alpha: true },
    { value: false, alpha: true },
    { value: false, alpha: false }
  ])('should return true for valid negate options object (%s)', payload => {
    expect(isNegateValid(payload)).toBe(true)
  })

  it.each([NaN, {}, [], { value: true }, { alpha: true }])(
    'should return false for invalid negate options object (%s)',
    payload => {
      expect(isNegateValid(payload)).toBe(false)
    }
  )
})
