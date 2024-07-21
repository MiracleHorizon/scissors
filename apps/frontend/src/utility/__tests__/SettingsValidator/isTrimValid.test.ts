import { MAX_TRIM_THRESHOLD, type TrimOptions } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isTrimValid', () => {
  const isTrimValid = SettingsValidator.isTrimValid

  const validOptions: TrimOptions = {
    background: '#000000',
    threshold: MAX_TRIM_THRESHOLD,
    lineArt: false
  }

  it('should return true for null', () => {
    expect(isTrimValid(null)).toBe(true)
  })

  it('should return true for valid trim options object', () => {
    expect(isTrimValid(validOptions)).toBe(true)
    expect(isTrimValid({ ...validOptions, background: null })).toBe(true)
  })

  it.each([
    NaN,
    {},
    [],
    { ...validOptions, lineArt: null },
    {
      ...validOptions,
      background: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    },
    { ...validOptions, background: '' }
    // FIXME: should return false
    // { ...validOptions, threshold: '10' }
  ])('should return false for invalid trim options object (%s)', payload => {
    expect(isTrimValid(payload)).toBe(false)
  })
})
