import { MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { SettingsValidator } from '@utility/SettingsValidator'

describe('utility - SettingsValidator.isRotateValid', () => {
  const isRotateValid = SettingsValidator.isRotateValid

  it('should return true for null', () => {
    expect(isRotateValid(null)).toBe(true)
  })

  it.each([
    {
      angle: 90,
      background: '#000000',
      withDominantBackground: true
    },
    {
      angle: -90,
      background: '#000000',
      withDominantBackground: false
    },
    {
      angle: 0,
      background: null,
      withDominantBackground: true
    }
  ])('should return true for valid rotate options object (%s)', payload => {
    expect(isRotateValid(payload)).toBe(true)
  })

  it.each([
    NaN,
    {},
    [],
    {
      angle: MIN_ROTATE_ANGLE - 1, // Invalid angle
      background: '#000000',
      withDominantBackground: true
    },
    {
      angle: MAX_ROTATE_ANGLE + 1, // Invalid angle
      background: '#000000',
      withDominantBackground: true
    },
    {
      angle: -90,
      withDominantBackground: false
    },
    {
      angle: -90,
      background: '#000000'
    },
    {
      angle: -90,
      background: 'foo', // Invalid background
      withDominantBackground: false
    }
  ])('should return false for invalid rotate options object (%s)', payload => {
    expect(isRotateValid(payload)).toBe(false)
  })
})
