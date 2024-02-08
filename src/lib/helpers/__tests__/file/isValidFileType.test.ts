import { isValidFileType } from '@lib/helpers/file/isValidFileType'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'

describe('@lib/helpers/file/isValidFileType', () => {
  it.each(ALLOWED_IMAGE_FORMATS.split(', '))(
    'should return true if file type is valid (%s)',
    type => expect(isValidFileType(type)).toBe(true)
  )

  it.each(['image', 'mp3', 'mp4', 'video', 'txt', 'pdf', 'docx', 'md'])(
    'should return false if file type is invalid (%s)',
    type => expect(isValidFileType(type)).toBe(false)
  )
})
