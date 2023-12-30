import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidTintOptions = ConvertSettingsValidator.isValidTintOptions

describe('isValidTintOptions', () => {
  it('should return true for null', () => {
    expect(isValidTintOptions(null)).toBe(true)
  })

  it('should return true for valid tint value', () => {
    expect(isValidTintOptions('foo')).toBe(true)
    expect(isValidTintOptions('#000000')).toBe(true)
  })

  it('should return false for invalid tint value', () => {
    expect(isValidTintOptions(undefined)).toBe(false)
    expect(isValidTintOptions({})).toBe(false)
    expect(isValidTintOptions([])).toBe(false)
    expect(isValidTintOptions(new Map())).toBe(false)
    expect(isValidTintOptions({ value: '#000000' })).toBe(false)
  })
})
