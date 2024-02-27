// TODO: Docs
export function downloadFile({ blob, download }: { blob: Blob; download: string }): void {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = download
  link.click()
}
