import { MAX_FILE_SIZE } from './constants'

/**
 * @param file - default file object
 * @returns boolean indicating whether the file size is valid
 */
export function isValidFileSize(file: File): boolean {
  if (file.size < 0) {
    return false
  }

  return file.size <= MAX_FILE_SIZE
}
