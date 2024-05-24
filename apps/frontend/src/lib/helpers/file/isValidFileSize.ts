import { MAX_FILE_SIZE } from './constants'

/**
 * @param size - the size of the file in bytes
 * @returns boolean indicating whether the file size is valid
 */
export const isValidFileSize = (size: number): boolean => {
  if (size < 0) {
    return false
  }

  return size <= MAX_FILE_SIZE
}
