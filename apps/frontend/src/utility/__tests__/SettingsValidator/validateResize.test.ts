import { SettingsValidator } from '@utility/SettingsValidator'
import {
  EXTEND_WITH,
  MIN_TRIM_THRESHOLD,
  RESIZE_FIT,
  RESIZE_KERNEL,
  RESIZE_POSITION,
  type ResizeSettings
} from '@server/sharp'

describe('@utility/SettingsValidator.validateResize', () => {
  const validate = SettingsValidator.validateResize

  const validSettings: ResizeSettings = {
    queue: [
      {
        name: 'resize',
        queueIndex: 0
      },
      {
        name: 'extend',
        queueIndex: 1
      },
      {
        name: 'trim',
        queueIndex: 2
      }
    ],
    resize: {
      width: 100,
      height: 100,
      fit: RESIZE_FIT.CONTAIN,
      background: '#000000',
      position: RESIZE_POSITION.CENTER,
      kernel: RESIZE_KERNEL.LANCZOS3,
      withoutEnlargement: true,
      withoutReduction: false,
      fastShrinkOnLoad: true,
      withDominantBackground: false
    },
    extend: {
      top: 10,
      bottom: 10,
      right: 10,
      left: 10,
      extendWith: EXTEND_WITH.BACKGROUND,
      background: '#FFFFFF',
      withDominantBackground: false
    },
    trim: {
      background: '#000000',
      threshold: MIN_TRIM_THRESHOLD
      // sharp v0.33.2
      // lineArt: false
    }
  }

  it('should return false for invalid settings object', () => {
    expect(validate(undefined)).toBe(false)
    expect(validate(null)).toBe(false)
    expect(validate([])).toBe(false)
    expect(validate({})).toBe(false)
    expect(validate(new Map())).toBe(false)
  })
  const invalidSettings = {
    queue: [],
    resize: {
      width: 100,
      height: 100,
      fit: RESIZE_FIT.CONTAIN,
      background: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }, // Invalid background color type
      position: RESIZE_POSITION.CENTER,
      kernel: RESIZE_KERNEL.LANCZOS3,
      withoutEnlargement: true,
      withoutReduction: false,
      fastShrinkOnLoad: true
    },
    extend: {
      top: 10,
      bottom: 10,
      right: -1, // Invalid extend direction size
      left: 10,
      extendWith: EXTEND_WITH.BACKGROUND,
      background: '#FFFFFF'
    },
    trim: {
      background: '#000000',
      threshold: MIN_TRIM_THRESHOLD - 1 // Invalid threshold
      // sharp v0.33.2
      // lineArt: false
    }
  }

  it('should return true for valid settings object', () => {
    expect(validate(validSettings)).toBe(true)
  })

  it('should return false for invalid settings object', () => {
    expect(validate(invalidSettings)).toBe(false)
  })

  it('should return false for invalid settings with queue', () => {
    expect(
      validate({
        ...validSettings,
        queue: [
          {
            name: 'resize',
            queueIndex: 0
          },
          {
            name: '1',
            queueIndex: 1
          }
        ]
      })
    ).toBe(false)
  })
})
