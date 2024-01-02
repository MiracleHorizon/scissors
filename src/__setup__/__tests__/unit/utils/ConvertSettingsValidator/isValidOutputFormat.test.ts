import { describe, expect, it } from 'vitest'

import { ImageFileFormat } from '@server/Sharp'
import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'

const isValidOutputFormat = ConvertSettingsValidator.isValidOutputFormat

describe('@utils/ConvertSettingsValidator.isValidOutputFormat', () => {
  it('should return true for null', () => {
    expect(isValidOutputFormat(null)).toBe(true)
  })

  it('should return true for valid output format', () => {
    for (const value of Object.values(ImageFileFormat)) {
      expect(isValidOutputFormat(value)).toBe(true)
    }
  })

  it('should return false for invalid tint value', () => {
    expect(isValidOutputFormat(undefined)).toBe(false)
    expect(isValidOutputFormat({})).toBe(false)
    expect(isValidOutputFormat([])).toBe(false)
    expect(isValidOutputFormat(ImageFileFormat.JPEG + 'foo')).toBe(false)
    expect(isValidOutputFormat({ value: ImageFileFormat.JPG })).toBe(false)
  })
})
