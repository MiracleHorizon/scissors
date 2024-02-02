// TODO: Docs
export function createJSONBlob<T>(payload: T): Blob {
  const json = JSON.stringify(payload, null, 2)

  return new Blob([json], {
    type: 'application/json'
  })
}

export function downloadFile({ blob, download }: { blob: Blob; download: string }): void {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = download
  link.click()
}
