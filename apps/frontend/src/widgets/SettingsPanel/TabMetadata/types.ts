export type ExifrData = Record<string, any>

export interface ExifrReturn {
  ifd0?: ExifrData
  exif?: ExifrData // ifd2
  gps?: ExifrData // ifd3
  icc?: ExifrData
}

export type TableItemValue = string | number | Date | Array<number>
