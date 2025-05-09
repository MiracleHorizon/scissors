import {
  type ConvertSettings,
  DEFAULT_GAMMA,
  IMAGE_FILE_FORMAT,
  MAX_NORMALIZE,
  MIN_BRIGHTNESS,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALIZE,
  MIN_SATURATION
} from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.validateConvert', () => {
  const validate = SettingsValidator.validateConvert

  it('should return true for valid settings object', () => {
    const validSettings: ConvertSettings = {
      flip: true,
      flop: false,
      grayscale: true,
      negate: {
        value: true,
        alpha: false
      },
      normalize: {
        lower: MIN_NORMALIZE,
        upper: MAX_NORMALIZE
      },
      blur: {
        value: true,
        sigma: 1
      },
      rotate: {
        angle: 90,
        background: '#FFFFFF'
      },
      gamma: DEFAULT_GAMMA,
      tint: '#FF0004',
      modulate: {
        lightness: MIN_LIGHTNESS,
        brightness: MIN_BRIGHTNESS,
        saturation: MIN_SATURATION,
        hue: MIN_HUE
      },
      outputFormat: IMAGE_FILE_FORMAT.PNG
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
        value: 2.2 // Invalid gamma options
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

  it.each([undefined, null, {}, []])(
    'should return false for invalid settings value (%s)',
    payload => {
      expect(validate(payload)).toBe(false)
    }
  )
})
