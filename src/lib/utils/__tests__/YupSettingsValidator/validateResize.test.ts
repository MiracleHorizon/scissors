import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import {
  ExtendWith,
  ResizeFit,
  ResizeKernel,
  ResizePosition,
  type ResizeSettings
} from '@server/Sharp'

describe('@utils/YupSettingsValidator.validateResize', () => {
  const validate = YupSettingsValidator.validateResize

  it('should return true for valid settings object', () => {
    const validSettings: ResizeSettings = {
      queue: [],
      resize: {
        width: 100,
        height: 100,
        fit: ResizeFit.CONTAIN,
        background: '#000000',
        position: ResizePosition.CENTER,
        kernel: ResizeKernel.LANCZOS3,
        withoutEnlargement: true,
        withoutReduction: false,
        fastShrinkOnLoad: true
      },
      extend: {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        extendWith: ExtendWith.BACKGROUND,
        background: '#FFFFFF'
      }
    }

    expect(validate(validSettings)).toBe(true)
  })

  it('should return false for invalid settings object', () => {
    const invalidSettings: unknown = {
      resize: {
        width: 100,
        height: 100,
        fit: ResizeFit.CONTAIN,
        background: {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        }, // Invalid background color type
        position: ResizePosition.CENTER,
        kernel: ResizeKernel.LANCZOS3,
        withoutEnlargement: true,
        withoutReduction: false,
        fastShrinkOnLoad: true
      },
      extend: {
        top: 10,
        bottom: 10,
        right: -1, // Invalid extend direction size
        left: 10,
        extendWith: ExtendWith.BACKGROUND,
        background: '#FFFFFF'
      }
    }

    expect(validate(invalidSettings)).toBe(false)
  })

  it('should return false for invalid settings object', () => {
    expect(validate(undefined)).toBe(false)
    expect(validate(null)).toBe(false)
    expect(validate([])).toBe(false)
    expect(validate({})).toBe(false)
    expect(validate(new Map())).toBe(false)
  })
})
