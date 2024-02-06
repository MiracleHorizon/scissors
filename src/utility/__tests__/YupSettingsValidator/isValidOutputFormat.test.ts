import { YupSettingsValidator } from '@utility/YupSettingsValidator'
import { IMAGE_FILE_FORMAT } from '@server/sharp'

describe('@utility/YupSettingsValidator.isValidOutputFormat', () => {
  const isValidOutputFormat = YupSettingsValidator.isValidOutputFormat

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
