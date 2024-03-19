import { isValidFileType } from '@helpers/file/isValidFileType'
import { allowedImageFormats } from '@site/config'

describe('@lib/helpers/file/isValidFileType', () => {
  it.each(allowedImageFormats.split(', '))('should return true if file type is valid (%s)', type =>
    expect(isValidFileType(type)).toBe(true)
  )

  it.each(['image', 'mp3', 'mp4', 'video', 'txt', 'pdf', 'docx', 'md'])(
    'should return false if file type is invalid (%s)',
    type => expect(isValidFileType(type)).toBe(false)
  )
})
