export const MIN_FILE_NAME_LENGTH = 1
export const MAX_FILE_NAME_LENGTH = 255
export const notAllowedChars = ['/', '\\', '<', '>', ':', '|', '"', '?', '*']

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
