import {
  DEFAULT_EXTEND_BACKGROUND,
  EXTEND_WITH,
  type ExtendOptions,
  MAX_EXTEND_DIRECTION_SIZE,
  MIN_EXTEND_DIRECTION_SIZE
} from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isExtendValid', () => {
  const isExtendValid = SettingsValidator.isExtendValid

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

  it.each([
    { top: 1 },
    { left: 4 },
    {
      ...validOptions,
      top: 'bar',
      bottom: 'qux',
      left: 'foo',
      right: 'baz'
    },
    {
      ...validOptions,
      top: 1,
      bottom: null,
      left: MAX_EXTEND_DIRECTION_SIZE + 1,
      right: null
    },
    {
      ...validOptions,
      top: MIN_EXTEND_DIRECTION_SIZE - 0.01,
      bottom: null,
      left: 6,
      right: null
    }
  ])('should return false for invalid positions properties (%s)', payload => {
    expect(isExtendValid(payload)).toBe(false)
  })

  it.each([
    {
      ...validOptions,
      extendWith: 'invalid value'
    },
    {
      ...validOptions,
      extendWith: EXTEND_WITH.COPY + 'foo'
    },
    {
      ...validOptions,
      extendWith: 'bar' + EXTEND_WITH.MIRROR
    }
  ])('should return false for invalid extendWith property (%s)', payload => {
    expect(isExtendValid(payload)).toBe(false)
  })

  it.each([
    {
      ...validOptions,
      background: 1
    },
    {
      ...validOptions,
      background: true
    },
    {
      ...validOptions,
      background: {
        r: 1,
        b: 1,
        a: 1
      }
    }
  ])('should return false for invalid background property (%s)', payload => {
    expect(isExtendValid(payload)).toBe(false)
  })
})
