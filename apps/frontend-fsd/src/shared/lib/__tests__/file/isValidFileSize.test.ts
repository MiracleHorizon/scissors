import { isValidFileSize, BYTES_IN_MB, MAX_FILE_SIZE, MAX_FILE_SIZE_MB } from '@/shared/lib'

describe('shared/lib/file - isValidFileSize', () => {
  it(`should return true if file size is less than ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize((MAX_FILE_SIZE_MB - 0.01) * BYTES_IN_MB)).toBe(true)
  })

  it(`should return true if file size is equal to ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize(MAX_FILE_SIZE)).toBe(true)
  })

  it(`should return false if file size is greater than ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize(MAX_FILE_SIZE + 1)).toBe(false)
    expect(isValidFileSize((MAX_FILE_SIZE_MB + 2) * BYTES_IN_MB)).toBe(false)
  })

  it('should return false if file size is less than 0', () => {
    expect(isValidFileSize(-1)).toBe(false)
  })
})
