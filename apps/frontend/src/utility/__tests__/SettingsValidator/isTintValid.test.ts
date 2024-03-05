import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isTintValid', () => {
  const isTintValid = SettingsValidator.isTintValid

  it('should return true for null', () => {
    expect(isTintValid(null)).toBe(true)
  })

  it('should return true for valid tint value', () => {
    expect(isTintValid('#000000')).toBe(true)
    expect(isTintValid('#ff6666')).toBe(true)
  })

  it('should return false for invalid tint value', () => {
    expect(isTintValid('black')).toBe(false)
    expect(isTintValid('foo')).toBe(false)
    expect(isTintValid(undefined)).toBe(false)
    expect(isTintValid({})).toBe(false)
    expect(isTintValid([])).toBe(false)
    expect(isTintValid(new Map())).toBe(false)
    expect(isTintValid({ value: '#000000' })).toBe(false)
  })
})
