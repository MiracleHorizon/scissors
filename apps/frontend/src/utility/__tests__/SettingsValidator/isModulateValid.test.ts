import { MIN_BRIGHTNESS } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isModulateValid', () => {
  const isModulateValid = SettingsValidator.isModulateValid

  it('should return true for null', () => {
    expect(isModulateValid(null)).toBe(true)
  })

  it.each([
    { lightness: 2, brightness: null, saturation: null, hue: null },
    { lightness: null, brightness: MIN_BRIGHTNESS, saturation: null, hue: null },
    { lightness: null, brightness: null, saturation: 2, hue: null },
    { lightness: null, brightness: null, saturation: null, hue: 2 },
    { lightness: null, brightness: null, saturation: null, hue: null }
  ])('should return true for valid modulate options object (%s)', payload => {
    expect(isModulateValid(payload)).toBe(true)
  })

  it.each([
    {},
    [],
    {
      lightness: null,
      saturation: null,
      hue: null
    },
    {
      brightness: null,
      saturation: null,
      hue: null
    },
    {
      lightness: null,
      brightness: null,
      hue: null
    },
    {
      lightness: null,
      brightness: null,
      saturation: null
    }
  ])('should return false for invalid modulate options value (%s)', payload => {
    expect(isModulateValid(payload)).toBe(false)
  })
})
