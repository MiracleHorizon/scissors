/*
Vercel specifies a limit of 4,500,000 bytes for the Serverless Functions payload. But in megabytes the value is 4.5,
which is not correct when converting bytes to megabytes with division/multiplication values equal to 1024.
Therefore, we decided to leave the value in megabytes unchanged and reduce the multiplication values to 1000.

Correct:
const KILOBYTES_IN_MB = 1024
const BYTES_IN_KB = 1024
*/

const BYTES_IN_KB = 1000
const KILOBYTES_IN_MB = 1000

export const MAX_FILE_SIZE_MB = 4.5
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
