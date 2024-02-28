import { YupSettingsValidator } from '@utility/YupSettingsValidator'
import { MIN_BRIGHTNESS } from '@server/sharp'

describe('@utility/YupSettingsValidator.isModulateValid', () => {
  const isModulateValid = YupSettingsValidator.isModulateValid

  it('should return true for null', () => {
    expect(isModulateValid(null)).toBe(true)
  })

  it('should return true for valid modulate options object', () => {
    expect(
      isModulateValid({
        lightness: 2,
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(true)
    expect(
      isModulateValid({
        lightness: null,
        brightness: MIN_BRIGHTNESS,
        saturation: null,
        hue: null
      })
    ).toBe(true)
    expect(
      isModulateValid({
        lightness: null,
        brightness: null,
        saturation: 2,
        hue: null
      })
    ).toBe(true)
    expect(
      isModulateValid({
        lightness: null,
        brightness: null,
        saturation: null,
        hue: 2
      })
    ).toBe(true)
    expect(
      isModulateValid({
        lightness: null,
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(true)
  })

  it('should return false for invalid modulate options object', () => {
    expect(isModulateValid(undefined)).toBe(false)
    expect(isModulateValid({})).toBe(false)
    expect(isModulateValid([])).toBe(false)
    expect(isModulateValid(new Map())).toBe(false)
    expect(
      isModulateValid({
        lightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isModulateValid({
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isModulateValid({
        lightness: null,
        brightness: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isModulateValid({
        lightness: null,
        brightness: null,
        saturation: null
      })
    ).toBe(false)
  })
})
