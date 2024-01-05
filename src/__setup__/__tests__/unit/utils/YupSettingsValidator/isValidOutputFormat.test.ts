import { describe, expect, it } from 'vitest'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { ImageFileFormat } from '@server/Sharp'

describe('@utils/YupSettingsValidator.isValidOutputFormat', () => {
  const isValidOutputFormat = YupSettingsValidator.isValidOutputFormat

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
