/**
 * @param blob - file to download
 * @param download - name of the downloaded file
 */
export const downloadFile = ({ blob, download }: { blob: Blob; download: string }): void => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  console.log(URL.createObjectURL(blob))

  link.download = download
  link.click()
}
