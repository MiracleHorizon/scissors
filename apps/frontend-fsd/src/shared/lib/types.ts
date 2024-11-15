import type { HTMLAttributes } from 'react'

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

export type ClassNameProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
export type StyleProps = Pick<HTMLAttributes<HTMLElement>, 'style'>
