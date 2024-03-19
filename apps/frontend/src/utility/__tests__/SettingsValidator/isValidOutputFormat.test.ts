import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isValidOutputFormat', () => {
  const isValidOutputFormat = SettingsValidator.isValidOutputFormat

  it('should return true for null', () => {
    expect(isValidOutputFormat(null)).toBe(true)
  })

  it('should return true for valid output format', () => {
    for (const value of Object.values(IMAGE_FILE_FORMAT)) {
      expect(isValidOutputFormat(value)).toBe(true)
    }
  })

  it('should return false for invalid tint value', () => {
    expect(isValidOutputFormat(undefined)).toBe(false)
    expect(isValidOutputFormat({})).toBe(false)
    expect(isValidOutputFormat([])).toBe(false)
    expect(isValidOutputFormat(IMAGE_FILE_FORMAT.JPEG + 'foo')).toBe(false)
    expect(isValidOutputFormat({ value: IMAGE_FILE_FORMAT.JPG })).toBe(false)
  })
})
