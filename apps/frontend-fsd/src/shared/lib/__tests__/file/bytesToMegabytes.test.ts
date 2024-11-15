import { bytesToMegabytes, BYTES_IN_MB } from '@/shared/lib'

describe('shared/lib/file - bytesToMegabytes', () => {
  it('should convert bytes to megabytes correctly', () => {
    expect(bytesToMegabytes(BYTES_IN_MB)).toBe(1)
    expect(bytesToMegabytes(BYTES_IN_MB * 4)).toBe(4)
    expect(bytesToMegabytes(BYTES_IN_MB / 2)).toBe(0.5)
  })
})
