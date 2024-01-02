import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidRotateOptions = ConvertSettingsValidator.isValidRotateOptions

describe('@utils/ConvertSettingsValidator.isValidRotateOptions', () => {
  it('should return true for null', () => {
    expect(isValidRotateOptions(null)).toBe(true)
  })

  it('should return true for valid rotate options object', () => {
    expect(
      isValidRotateOptions({
        angle: 90,
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(true)
    expect(
      isValidRotateOptions({
        angle: -90,
        background: 'foo',
        withDominantBackground: false
      })
    ).toBe(true)
  })

  it('should return false for invalid rotate options object', () => {
    expect(isValidRotateOptions(undefined)).toBe(false)
    expect(isValidRotateOptions({})).toBe(false)
    expect(isValidRotateOptions([])).toBe(false)
    expect(isValidRotateOptions(new Map())).toBe(false)
    expect(
      isValidRotateOptions({
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(false)
    expect(
      isValidRotateOptions({
        angle: -90,
        withDominantBackground: false
      })
    ).toBe(false)
    expect(
      isValidRotateOptions({
        angle: -90,
        background: 'foo'
      })
    ).toBe(false)
  })
})
