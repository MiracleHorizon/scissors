import { MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('@utility/SettingsValidator.isRotateValid', () => {
  const isRotateValid = SettingsValidator.isRotateValid

  it('should return true for null', () => {
    expect(isRotateValid(null)).toBe(true)
  })

  it('should return true for valid rotate options object', () => {
    expect(
      isRotateValid({
        angle: 90,
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(true)
    expect(
      isRotateValid({
        angle: -90,
        background: '#000000',
        withDominantBackground: false
      })
    ).toBe(true)
    expect(
      isRotateValid({
        angle: 0,
        background: null,
        withDominantBackground: true
      })
    ).toBe(true)
  })

  it('should return false for invalid rotate options object', () => {
    expect(isRotateValid(undefined)).toBe(false)
    expect(isRotateValid({})).toBe(false)
    expect(isRotateValid([])).toBe(false)
    expect(isRotateValid(new Map())).toBe(false)
    expect(
      isRotateValid({
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(false)
    expect(
      isRotateValid({
        angle: MIN_ROTATE_ANGLE - 1, // Invalid angle
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(false)
    expect(
      isRotateValid({
        angle: MAX_ROTATE_ANGLE + 1, // Invalid angle
        background: '#000000',
        withDominantBackground: true
      })
    ).toBe(false)
    expect(
      isRotateValid({
        angle: -90,
        withDominantBackground: false
      })
    ).toBe(false)
    expect(
      isRotateValid({
        angle: -90,
        background: '#000000'
      })
    ).toBe(false)
    expect(
      isRotateValid({
        angle: -90,
        background: 'foo', // Invalid background
        withDominantBackground: false
      })
    ).toBe(false)
  })
})
