import { MAX_TRIM_THRESHOLD, type TrimOptions } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isTrimValid', () => {
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

  it('should return false for invalid trim options object', () => {
    expect(isTrimValid({})).toBe(false)
    expect(isTrimValid([])).toBe(false)
    expect(isTrimValid({ ...validOptions, lineArt: null })).toBe(false)
    expect(
      isTrimValid({
        ...validOptions,
        background: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        }
      })
    ).toBe(false)
    expect(isTrimValid({ ...validOptions, background: '' })).toBe(false)
    // FIXME: should return false
    // expect(isTrimValid({ ...validOptions, threshold: '10' })).toBe(false)
  })
})
