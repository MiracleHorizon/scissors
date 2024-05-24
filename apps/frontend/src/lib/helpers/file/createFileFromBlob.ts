/**
 * @param blob - file blob
 * @param fileName - name of the file to be created
 * @returns created file object
 */
export const createFileFromBlob = (blob: Blob, fileName: string): File =>
  new File([blob], fileName, {
    type: blob.type
  })
