import { cropImageFileType } from '@helpers/file/cropImageFileType'

describe('helpers/file - cropImageFileType', () => {
  it.each(['png', 'jpg', 'jpeg', 'webp'])('should crop the file type correctly (%s)', type =>
    expect(cropImageFileType(`image/${type}`)).toBe(type)
  )
})
