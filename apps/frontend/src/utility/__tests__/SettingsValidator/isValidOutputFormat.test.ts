import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isValidOutputFormat', () => {
  const isValidOutputFormat = SettingsValidator.isValidOutputFormat

  it('should return true for null', () => {
    expect(isValidOutputFormat(null)).toBe(true)
  })

  it.each([Object.values(IMAGE_FILE_FORMAT)])(
    'should return true for valid output format (%s)',
    payload => {
      expect(isValidOutputFormat(payload)).toBe(true)
    }
  )

  it.each([
    undefined,
    NaN,
    {},
    [],
    IMAGE_FILE_FORMAT.JPEG + 'foo',
    { value: IMAGE_FILE_FORMAT.JPG }
  ])('should return false for invalid tint value (%s)', payload => {
    expect(isValidOutputFormat(payload)).toBe(false)
  })
})
