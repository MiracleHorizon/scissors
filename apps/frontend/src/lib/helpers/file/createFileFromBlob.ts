/**
 * @param blob - file blob
 * @param fileName - name of the file to be created
 * @returns created file object
 */
export function createFileFromBlob(blob: Blob, fileName: string): File {
  return new File([blob], fileName, {
    type: blob.type
  })
}
