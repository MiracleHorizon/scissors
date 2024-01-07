import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import {
  type ConvertSettings,
  ExtendWith,
  ImageFileFormat,
  MAX_NORMALISE,
  MIN_BRIGHTNESS,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALISE,
  MIN_SATURATION,
  ResizeFit,
  ResizeKernel,
  ResizePosition
} from '@server/Sharp'

describe('@utils/YupSettingsValidator.validate', () => {
  const validate = YupSettingsValidator.validate

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
      resize: {
        width: 100,
        height: 100,
        fit: ResizeFit.CONTAIN,
        background: '#000000',
        position: ResizePosition.CENTER,
        kernel: ResizeKernel.LANCZOS3,
        withoutEnlargement: true,
        withoutReduction: false,
        fastShrinkOnLoad: true
      },
      extend: {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        extendWith: ExtendWith.BACKGROUND,
        background: '#FFFFFF'
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
      resize: {
        width: 100,
        height: 100,
        fit: ResizeFit.CONTAIN,
        background: '#000000',
        position: ResizePosition.CENTER,
        kernel: ResizeKernel.LANCZOS3,
        withoutEnlargement: true,
        withoutReduction: false,
        fastShrinkOnLoad: true
      },
      extend: {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        extendWith: 'background',
        background: '#FFFFFF'
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
