import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'
import {
  type ConvertSettings,
  ExtendWith,
  ImageFileFormat,
  ResizeFit,
  ResizeKernel,
  ResizePosition
} from '@server/Sharp'

describe('@utils/ConvertSettingsValidator.isValidSettings', () => {
  it('should return true for valid settings object', () => {
    const validSettings: ConvertSettings = {
      flip: true,
      flop: false,
      grayscale: true,
      negate: { value: true, alpha: false },
      normalise: { lower: 0, upper: 255 },
      blur: { value: true, sigma: 1 },
      rotate: { angle: 90, background: '#FFFFFF', withDominantBackground: false },
      gamma: { value: 2.2 },
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
      tint: '#FF0000',
      modulate: { lightness: 50, brightness: 50, saturation: 50, hue: 50 },
      outputFormat: ImageFileFormat.PNG
    }

    expect(ConvertSettingsValidator.validate(validSettings)).toBe(true)
  })

  it('should return false for invalid settings object', () => {
    const invalidSettings: any = {
      flip: true,
      flop: false,
      // Missing required properties for negate
      negate: { alpha: false },
      normalise: { lower: 0, upper: 255 },
      blur: { value: true, sigma: 1 },
      rotate: { angle: 90, background: '#FFFFFF', withDominantBackground: false },
      gamma: { value: 2.2 },
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
      modulate: { lightness: 50, brightness: 50, saturation: 50, hue: 50 },
      outputFormat: 'invalidFormat' // Invalid output format
    }

    expect(ConvertSettingsValidator.validate(invalidSettings)).toBe(false)
  })

  it('should return false for invalid settings object', () => {
    expect(ConvertSettingsValidator.validate(undefined)).toBe(false)
    expect(ConvertSettingsValidator.validate(null)).toBe(false)
    expect(ConvertSettingsValidator.validate({})).toBe(false)
    expect(ConvertSettingsValidator.validate([])).toBe(false)
    expect(ConvertSettingsValidator.validate(new Map())).toBe(false)
  })
})
