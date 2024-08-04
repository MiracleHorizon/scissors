/**
 * @field file - file to download
 * @field fileName - name of the file (can be different from the original file name)
 * @field link - download link
 */
export interface DownloadableFile {
  file: File
  fileName: string
  link: string
}
