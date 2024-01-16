import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { MAX_TRIM_THRESHOLD, type TrimOptions } from '@server/Sharp'

describe('@utils/YupSettingsValidator.isTrimValid', () => {
  const isTrimValid = YupSettingsValidator.isTrimValid

  const validOptions: TrimOptions = {
    background: '#000000',
    threshold: MAX_TRIM_THRESHOLD
    // sharp v0.33.2
    // lineArt: false
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
    // sharp v0.33.2
    // expect(isTrimValid({ ...validOptions, lineArt: null })).toBe(false)
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
