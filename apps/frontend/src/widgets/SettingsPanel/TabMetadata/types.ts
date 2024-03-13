export type ExifrData = Record<string, any>

export interface ExifrReturn {
  exif?: ExifrData
  gps?: ExifrData
  ifd0?: ExifrData
}

export type TableItemValue = string | number | Date | Array<number>
