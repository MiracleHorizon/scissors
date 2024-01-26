/*
Vercel specifies a limit of 4,500,000 bytes (in decimal variant) for the Serverless Functions payload.
*/
export const MAX_FILE_SIZE_MB = 4.5

export const BYTES_IN_KB = 1000
export const KILOBYTES_IN_MB = 1000
export const BYTES_IN_MB = KILOBYTES_IN_MB * BYTES_IN_KB
export const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * BYTES_IN_MB

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
