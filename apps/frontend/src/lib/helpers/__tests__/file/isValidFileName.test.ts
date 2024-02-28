import { isValidFileName } from '@helpers/file/isValidFileName'
import {
  MAX_FILE_NAME_LENGTH,
  MIN_FILE_NAME_LENGTH,
  notAllowedChars
} from '@helpers/file/constants'

describe('@lib/helpers/file/isValidFileName', () => {
  it(`should return false because file name length is less than ${MIN_FILE_NAME_LENGTH}`, () => {
    expect(isValidFileName('a'.repeat(MIN_FILE_NAME_LENGTH - 1))).toBe(false)
  })

  it(`should return false because file name length is greater than ${MAX_FILE_NAME_LENGTH}`, () => {
    expect(isValidFileName('a'.repeat(MAX_FILE_NAME_LENGTH + 1))).toBe(false)
  })

  it('should return false because file name contains not allowed chars', () => {
    for (const char of notAllowedChars) {
      expect(isValidFileName(`hello${char}.jpg`)).toBe(false)
    }
  })
})
