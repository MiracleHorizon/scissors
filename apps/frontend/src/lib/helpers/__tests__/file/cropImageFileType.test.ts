import { cropImageFileType } from '@helpers/file/cropImageFileType'

describe('@lib/helpers/file/cropImageFileType', () => {
  it('should crop the file type correctly', () => {
    expect(cropImageFileType('image/png')).toBe('png')
    expect(cropImageFileType('image/jpg')).toBe('jpg')
    expect(cropImageFileType('image/jpeg')).toBe('jpeg')
    expect(cropImageFileType('image/webp')).toBe('webp')
  })
})
