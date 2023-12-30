import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidModulateOptions = ConvertSettingsValidator.isValidModulateOptions

describe('isValidModulateOptions', () => {
  it('should return true for null', () => {
    expect(isValidModulateOptions(null)).toBe(true)
  })

  it('should return true for valid modulate options object', () => {
    expect(
      isValidModulateOptions({
        lightness: 2,
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(true)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: 2,
        saturation: null,
        hue: null
      })
    ).toBe(true)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: null,
        saturation: 2,
        hue: null
      })
    ).toBe(true)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: null,
        saturation: null,
        hue: 2
      })
    ).toBe(true)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(true)
  })

  it('should return false for invalid modulate options object', () => {
    expect(isValidModulateOptions(undefined)).toBe(false)
    expect(isValidModulateOptions({})).toBe(false)
    expect(isValidModulateOptions([])).toBe(false)
    expect(isValidModulateOptions(new Map())).toBe(false)
    expect(
      isValidModulateOptions({
        lightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isValidModulateOptions({
        brightness: null,
        saturation: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: null,
        hue: null
      })
    ).toBe(false)
    expect(
      isValidModulateOptions({
        lightness: null,
        brightness: null,
        saturation: null
      })
    ).toBe(false)
  })
})
