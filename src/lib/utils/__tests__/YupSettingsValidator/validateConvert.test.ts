import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import {
  type ConvertSettings,
  ImageFileFormat,
  MAX_NORMALISE,
  MIN_BRIGHTNESS,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALISE,
  MIN_SATURATION
} from '@server/Sharp'

describe('@utils/YupSettingsValidator.validateConvert', () => {
  const validate = YupSettingsValidator.validateConvert

  it('should return true for valid settings object', () => {
    const validSettings: ConvertSettings = {
      flip: true,
      flop: false,
      grayscale: true,
      negate: {
        value: true,
        alpha: false
      },
      normalise: {
        lower: MIN_NORMALISE,
        upper: MAX_NORMALISE
      },
      blur: {
        value: true,
        sigma: 1
      },
      rotate: {
        angle: 90,
        background: '#FFFFFF',
        withDominantBackground: false
      },
      gamma: {
        value: 2.2
      },
      tint: '#FF0004',
      modulate: {
        lightness: MIN_LIGHTNESS,
        brightness: MIN_BRIGHTNESS,
        saturation: MIN_SATURATION,
        hue: MIN_HUE
      },
      outputFormat: ImageFileFormat.PNG
    }

    expect(validate(validSettings)).toBe(true)
  })

  it('should return false for invalid settings object', () => {
    const invalidSettings: unknown = {
      flip: true,
      flop: false,
      negate: {
        alpha: false // Missing required properties for negate
      },
      normalise: {
        lower: 0,
        upper: 255
      },
      blur: {
        value: true,
        sigma: 1
      },
      rotate: {
        angle: 90,
        background: '#FFFFFF',
        withDominantBackground: false
      },
      gamma: {
        value: 2.2
      },
      tint: '#FF0000',
      modulate: {
        lightness: MIN_LIGHTNESS - 1, // Invalid lightness
        brightness: MIN_BRIGHTNESS,
        saturation: MIN_SATURATION,
        hue: MIN_HUE
      },
      outputFormat: 'invalidFormat' // Invalid output format
    }

    expect(validate(invalidSettings)).toBe(false)
  })

  it('should return false for invalid settings object', () => {
    expect(validate(undefined)).toBe(false)
    expect(validate(null)).toBe(false)
    expect(validate({})).toBe(false)
    expect(validate([])).toBe(false)
    expect(validate(new Map())).toBe(false)
  })
})