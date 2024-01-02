import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'
import { type ExtendOptions, ExtendWith } from '@server/Sharp'

const isValidExtendOptions = ConvertSettingsValidator.isValidExtendOptions

const validOptions: ExtendOptions = {
  left: 4,
  top: 6,
  right: 2,
  bottom: 0,
  extendWith: ExtendWith.BACKGROUND,
  background: '#000000'
}

describe('@utils/ConvertSettingsValidator.isValidExtendOptions', () => {
  it('should return true for null', () => {
    expect(isValidExtendOptions(null)).toBe(true)
  })

  it('should return true for valid extend options object', () => {
    expect(isValidExtendOptions(validOptions)).toBe(true)
  })

  it('should return false for non-object extend options', () => {
    expect(isValidExtendOptions('foo')).toBe(false)
    expect(isValidExtendOptions(1)).toBe(false)
    expect(isValidExtendOptions(true)).toBe(false)
  })

  it('should return false for array extend options', () => {
    expect(isValidExtendOptions([])).toBe(false)
    expect(isValidExtendOptions(['foo', 'bar', 'baz'])).toBe(false)
  })

  it('should return false for invalid extendWith property', () => {
    expect(isValidExtendOptions({ ...validOptions, extendWith: 'invalid value' })).toBe(false)
    expect(
      isValidExtendOptions({ ...validOptions, extendWith: ExtendWith.BACKGROUND + 'foo' })
    ).toBe(false)
    expect(isValidExtendOptions({ ...validOptions, extendWith: 'bar' + ExtendWith.MIRROR })).toBe(
      false
    )
  })

  it('should return false for invalid background property', () => {
    expect(isValidExtendOptions({ ...validOptions, background: 1 })).toBe(false)
    expect(isValidExtendOptions({ ...validOptions, background: true })).toBe(false)
    expect(isValidExtendOptions({ ...validOptions, background: { r: 1, b: 1, a: 1 } })).toBe(false)
  })
})
