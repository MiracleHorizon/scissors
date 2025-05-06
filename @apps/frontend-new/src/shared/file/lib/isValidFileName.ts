import { MAX_FILE_NAME_LENGTH, MIN_FILE_NAME_LENGTH, NOT_ALLOWED_CHARS } from './constants'

/**
 * @param fileName - file name to be checked
 * @returns boolean indicating whether the file name is valid
 */
export const isValidFileName = (fileName: string): boolean => {
  if (fileName.length < MIN_FILE_NAME_LENGTH || fileName.length > MAX_FILE_NAME_LENGTH) {
    return false
  }

  return !NOT_ALLOWED_CHARS.some(char => fileName.includes(char))
}
