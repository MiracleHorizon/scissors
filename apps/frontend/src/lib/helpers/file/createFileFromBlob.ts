export function createFileFromBlob(blob: Blob, fileName: string): File {
  return new File([blob], fileName, {
    type: blob.type
  })
}
