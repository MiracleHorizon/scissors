/**
 * @param fileName - file name with extension (example: 'logo.png')
 * @returns file name without extension (example: 'logo')
 */
export function cropFileName(fileName: string): string {
  const splitString = fileName.split('.').filter(value => value !== '')

  if (splitString.length <= 1) {
    return fileName
  }

  return splitString.slice(0, -1).join('.')
}
