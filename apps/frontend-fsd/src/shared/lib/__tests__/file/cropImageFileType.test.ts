import { cropImageFileType } from '@/shared/lib'

describe('shared/lib/file - cropImageFileType', () => {
  it.each(['png', 'jpg', 'jpeg', 'webp'])('should crop the file type correctly (%s)', type =>
    expect(cropImageFileType(`image/${type}`)).toBe(type)
  )
})
