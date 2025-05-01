declare global {
  export interface DownloadableFile {
    file: File
    name: string
    size: number
    type: string
  }
}

export {}
