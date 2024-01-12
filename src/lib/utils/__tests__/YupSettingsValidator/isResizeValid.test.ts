import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { ResizeFit, ResizeKernel, type ResizeOptions, ResizePosition } from '@server/Sharp'

describe('@utils/YupSettingsValidator.isResizeValid', () => {
  const isResizeValid = YupSettingsValidator.isResizeValid

  const validOptions: ResizeOptions = {
    width: 100,
    height: 100,
    fit: ResizeFit.CONTAIN,
    background: '#000000',
    position: ResizePosition.CENTER,
    kernel: ResizeKernel.LANCZOS3,
    withoutEnlargement: true,
    withoutReduction: false,
    fastShrinkOnLoad: true
  }

  function testBoolean(key: 'withoutEnlargement' | 'withoutReduction' | 'fastShrinkOnLoad') {
    expect(
      isResizeValid({
        ...validOptions,
        [key]: null
      })
    ).toBe(false)
    expect(
      isResizeValid({
        ...validOptions,
        withoutEnlargement: {
          [key]: 'foo'
        }
      })
    ).toBe(false)

    expect(
      isResizeValid({
        ...validOptions,
        [key]: true
      })
    ).toBe(true)
    expect(
      isResizeValid({
        ...validOptions,
        [key]: false
      })
    ).toBe(true)
  }

  it('should return true for null', () => {
    expect(isResizeValid(null)).toBe(true)
  })

  it('should return true for valid resize options object', () => {
    expect(isResizeValid(validOptions)).toBe(true)
  })

  it('should return false for non-object resize options', () => {
    expect(isResizeValid('foo')).toBe(false)
    expect(isResizeValid(1)).toBe(false)
    expect(isResizeValid(true)).toBe(false)
  })

  it('should return false for array resize options', () => {
    expect(isResizeValid([])).toBe(false)
    expect(isResizeValid(['foo', 'bar', 'baz'])).toBe(false)
  })

  it('should return false for invalid fit property', () => {
    expect(isResizeValid({ ...validOptions, fit: 'invalidFit' })).toBe(false)
    expect(isResizeValid({ ...validOptions, fit: ResizeFit.CONTAIN + 'foo' })).toBe(false)
    expect(isResizeValid({ ...validOptions, fit: 'bar' + ResizeFit.INSIDE })).toBe(false)
  })

  it('should return false for invalid background property', () => {
    expect(isResizeValid({ ...validOptions, background: 1 })).toBe(false)
    expect(isResizeValid({ ...validOptions, background: true })).toBe(false)
    expect(isResizeValid({ ...validOptions, background: { r: 1, b: 1, a: 1 } })).toBe(false)
  })

  it('should return false for invalid position property', () => {
    expect(isResizeValid({ ...validOptions, position: 1 })).toBe(false)
    expect(isResizeValid({ ...validOptions, position: true })).toBe(false)
    expect(isResizeValid({ ...validOptions, position: { x: 1, y: 1 } })).toBe(false)
  })

  it('should return false for invalid kernel property', () => {
    expect(
      isResizeValid({
        ...validOptions,
        kernel: { value: ResizeKernel.CUBIC }
      })
    ).toBe(false)
    expect(isResizeValid({ ...validOptions, kernel: false })).toBe(false)
    expect(isResizeValid({ ...validOptions, kernel: ['kernel'] })).toBe(false)
  })

  it('should return true when width and height are both null', () => {
    const options = {
      ...validOptions,
      width: null,
      height: null
    }

    expect(isResizeValid(options)).toBe(true)
  })

  it('should return false when height is invalid', () => {
    const options = {
      ...validOptions,
      height: {
        foo: 'foo'
      }
    }

    expect(isResizeValid(options)).toBe(false)
  })

  it('should return false when width is invalid', () => {
    const options = {
      ...validOptions,
      width: {
        foo: 'foo'
      }
    }

    expect(isResizeValid(options)).toBe(false)
  })

  it('should return false when width and height are both invalid', () => {
    const options: any = {
      ...validOptions,
      width: {
        value: 1
      },
      height: {
        value: 'foo'
      }
    }

    expect(isResizeValid(options)).toBe(false)
  })

  it('should correct value of withoutEnlargement', () => {
    testBoolean('withoutEnlargement')
  })

  it('should correct value of withoutReduction', () => {
    testBoolean('withoutReduction')
  })

  it('should correct value of fastShrinkOnLoad', () => {
    testBoolean('fastShrinkOnLoad')
  })
})
