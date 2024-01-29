import { MAX_FILE_NAME_LENGTH, MIN_FILE_NAME_LENGTH, notAllowedChars } from './constants'

/**
 * @param fileName - file name to be checked
 * @returns boolean indicating whether the file name is valid
 */
export function isValidFileName(fileName: string): boolean {
  if (fileName.length < MIN_FILE_NAME_LENGTH || fileName.length > MAX_FILE_NAME_LENGTH) {
    return false
  }

  return !notAllowedChars.some(char => fileName.includes(char))
}
