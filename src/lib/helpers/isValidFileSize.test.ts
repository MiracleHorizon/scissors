import { describe, expect, it } from 'vitest'

import { BYTES_IN_MB, isValidFileSize, MAX_FILE_SIZE, MAX_FILE_SIZE_MB } from './isValidFileSize'

describe('isValidFileSize', () => {
  it(`should return true if file size is less than ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize({ size: 1.92 * BYTES_IN_MB } as File)).toBe(true)
  })

  it(`should return true if file size is equal to ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize({ size: MAX_FILE_SIZE } as File)).toBe(true)
  })

  it(`should return false if file size is greater than ${MAX_FILE_SIZE_MB} MB`, () => {
    expect(isValidFileSize({ size: (MAX_FILE_SIZE_MB + 2) * BYTES_IN_MB } as File)).toBe(false)
  })

  it('should return false if file size is less than 0', () => {
    expect(isValidFileSize({ size: -1 } as File)).toBe(false)
  })
})
