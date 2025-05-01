/**
 * Removes the file extension from a file name
 * @param fileName - The name of the file to remove the extension from
 * @returns The file name without the extension
 */
export const removeFileExtension = (fileName: string): string => {
  const splitString = fileName.split('.').filter(value => value !== '')

  if (splitString.length <= 1) {
    return fileName
  }

  return splitString.slice(0, -1).join('.')
}
