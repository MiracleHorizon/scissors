import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isTintValid', () => {
  const isTintValid = SettingsValidator.isTintValid

  it('should return true for null', () => {
    expect(isTintValid(null)).toBe(true)
  })

  it('should return true for valid tint value', () => {
    expect(isTintValid('#000000')).toBe(true)
    expect(isTintValid('#ff6666')).toBe(true)
  })

  it.each(['black', 'foo', undefined, {}, [], { value: '#000000' }])(
    'should return false for invalid tint value (%s)',
    payload => {
      expect(isTintValid(payload)).toBe(false)
    }
  )
})
