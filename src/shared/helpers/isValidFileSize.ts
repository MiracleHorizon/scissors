const BYTES_IN_KB = 1024
export const BYTES_IN_MB = BYTES_IN_KB * 1024
export const MAX_FILE_SIZE_MB = 4.5
export const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * BYTES_IN_MB

export function isValidFileSize(file: File): boolean {
  if (file.size < 0) {
    return false
  }

  return file.size <= MAX_FILE_SIZE
}
