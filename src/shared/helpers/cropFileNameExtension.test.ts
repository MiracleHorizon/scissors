import { describe, expect, it } from 'vitest'

import { cropFileNameExtension } from './cropFileNameExtension'

describe('cropFileNameExtension', () => {
  it('should crop file name extension', () => {
    expect(cropFileNameExtension('hello-world.png')).toBe('hello-world')
    expect(cropFileNameExtension('foo.jpeg')).toBe('foo')
    expect(cropFileNameExtension('bar.jpg')).toBe('bar')
    expect(cropFileNameExtension('baz.webp')).toBe('baz')
    expect(cropFileNameExtension('my-file-name.jpeg.webp')).toBe('my-file-name.jpeg')
    expect(cropFileNameExtension('my-file-name-1.webp.webp')).toBe('my-file-name-1.webp')
    expect(cropFileNameExtension('jpeg')).toBe('jpeg')
    expect(cropFileNameExtension('.png')).toBe('.png')
    expect(cropFileNameExtension('.')).toBe('.')
  })
})
