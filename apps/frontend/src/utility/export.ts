/**
 * @param blob - file to download
 * @param download - name of the downloaded file
 */
export const downloadFile = ({ blob, download }: Params): void => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = download
  link.click()
}

interface Params {
  blob: Blob
  download: string
}
