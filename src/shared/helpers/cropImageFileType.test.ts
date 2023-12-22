import { describe, expect, it } from 'vitest'

import { cropImageFileType } from './cropImageFileType'

describe('cropImageFileType', () => {
  it('should crop file type', () => {
    expect(cropImageFileType('image/png')).toBe('png')
    expect(cropImageFileType('image/jpg')).toBe('jpg')
    expect(cropImageFileType('image/jpeg')).toBe('jpeg')
    expect(cropImageFileType('image/webp')).toBe('webp')
  })
})
