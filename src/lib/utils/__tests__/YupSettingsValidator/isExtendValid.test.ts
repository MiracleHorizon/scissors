import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import {
  DEFAULT_EXTEND_BACKGROUND,
  EXTEND_WITH,
  type ExtendOptions,
  MAX_EXTEND_DIRECTION_SIZE,
  MIN_EXTEND_DIRECTION_SIZE
} from '@server/sharp'

describe('@utils/YupSettingsValidator.isExtendValid', () => {
  const isExtendValid = YupSettingsValidator.isExtendValid

  const validOptions: ExtendOptions = {
    left: 4,
    top: 6,
    right: 2,
    bottom: 1,
    extendWith: EXTEND_WITH.BACKGROUND,
    background: DEFAULT_EXTEND_BACKGROUND,
    withDominantBackground: false
  }

  it('should return true for null', () => {
    expect(isExtendValid(null)).toBe(true)
  })

  it('should return true for valid extend options object', () => {
    expect(isExtendValid(validOptions)).toBe(true)
    expect(
      isExtendValid({
        ...validOptions,
        top: 1,
        bottom: null,
        left: null,
        right: 5
      })
    ).toBe(true)
  })

  it('should return false for non-object extend options', () => {
    expect(isExtendValid('foo')).toBe(false)
    expect(isExtendValid(1)).toBe(false)
    expect(isExtendValid(true)).toBe(false)
  })

  it('should return false for array extend options', () => {
    expect(isExtendValid([])).toBe(false)
    expect(isExtendValid(['foo', 'bar', 'baz'])).toBe(false)
  })

  it('should return false for invalid extend options object', () => {
    expect(isExtendValid(undefined)).toBe(false)
    expect(isExtendValid({})).toBe(false)
  })

  it('should return false for invalid extendWith property', () => {
    expect(isExtendValid({ top: 1 })).toBe(false)
    expect(isExtendValid({ left: 4 })).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        top: 'bar',
        bottom: 'qux',
        left: 'foo',
        right: 'baz'
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        top: 1,
        bottom: null,
        left: MAX_EXTEND_DIRECTION_SIZE + 1,
        right: null
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        top: MIN_EXTEND_DIRECTION_SIZE - 0.01,
        bottom: null,
        left: 6,
        right: null
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        extendWith: 'invalid value'
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        extendWith: EXTEND_WITH.COPY + 'foo'
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        extendWith: 'bar' + EXTEND_WITH.MIRROR
      })
    ).toBe(false)
  })

  it('should return false for invalid background property', () => {
    expect(
      isExtendValid({
        ...validOptions,
        background: 1
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        background: true
      })
    ).toBe(false)
    expect(
      isExtendValid({
        ...validOptions,
        background: {
          r: 1,
          b: 1,
          a: 1
        }
      })
    ).toBe(false)
  })
})
