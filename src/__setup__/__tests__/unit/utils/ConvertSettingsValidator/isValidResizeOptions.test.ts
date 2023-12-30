import { describe, expect, it } from 'vitest'

import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'
import { ResizeFit, ResizeKernel, type ResizeOptions, ResizePosition } from '@server/Sharp'

const isValidResizeOptions = ConvertSettingsValidator.isValidResizeOptions

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
    isValidResizeOptions({
      ...validOptions,
      [key]: null
    })
  ).toBe(false)
  expect(
    isValidResizeOptions({
      ...validOptions,
      withoutEnlargement: {
        [key]: 'foo'
      }
    })
  ).toBe(false)

  expect(
    isValidResizeOptions({
      ...validOptions,
      [key]: true
    })
  ).toBe(true)
  expect(
    isValidResizeOptions({
      ...validOptions,
      [key]: false
    })
  ).toBe(true)
}

describe('isValidResizeOptions', () => {
  it('should return true for null', () => {
    expect(isValidResizeOptions(null)).toBe(true)
  })

  it('should return true for valid resize options object', () => {
    expect(isValidResizeOptions(validOptions)).toBe(true)
  })

  it('should return false for non-object resize options', () => {
    expect(isValidResizeOptions('foo')).toBe(false)
    expect(isValidResizeOptions(1)).toBe(false)
    expect(isValidResizeOptions(true)).toBe(false)
  })

  it('should return false for array resize options', () => {
    expect(isValidResizeOptions([])).toBe(false)
    expect(isValidResizeOptions(['foo', 'bar', 'baz'])).toBe(false)
  })

  it('should return false for invalid fit property', () => {
    expect(isValidResizeOptions({ ...validOptions, fit: 'invalidFit' })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, fit: ResizeFit.CONTAIN + 'foo' })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, fit: 'bar' + ResizeFit.INSIDE })).toBe(false)
  })

  it('should return false for invalid background property', () => {
    expect(isValidResizeOptions({ ...validOptions, background: 1 })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, background: true })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, background: { r: 1, b: 1, a: 1 } })).toBe(false)
  })

  it('should return false for invalid position property', () => {
    expect(isValidResizeOptions({ ...validOptions, position: 1 })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, position: true })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, position: { x: 1, y: 1 } })).toBe(false)
  })

  it('should return false for invalid kernel property', () => {
    expect(
      isValidResizeOptions({
        ...validOptions,
        kernel: { value: ResizeKernel.CUBIC }
      })
    ).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, kernel: false })).toBe(false)
    expect(isValidResizeOptions({ ...validOptions, kernel: ['kernel'] })).toBe(false)
  })

  it('should return true when width and height are both null', () => {
    const options = {
      ...validOptions,
      width: null,
      height: null
    }

    expect(isValidResizeOptions(options)).toBe(true)
  })

  it('should return false when height is invalid', () => {
    const options = {
      ...validOptions,
      height: {
        foo: 'foo'
      }
    }

    expect(isValidResizeOptions(options)).toBe(false)
  })

  it('should return false when width is invalid', () => {
    const options = {
      ...validOptions,
      width: {
        foo: 'foo'
      }
    }

    expect(isValidResizeOptions(options)).toBe(false)
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

    expect(isValidResizeOptions(options)).toBe(false)
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
