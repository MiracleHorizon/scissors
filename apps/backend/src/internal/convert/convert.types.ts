import type { ConvertSettingsDto } from './dto'
import type { File } from '@internal/types'

export interface ConvertServiceAbstraction {
  convert(convertParams: ConvertParams): Promise<Buffer>
}

export interface ConvertParams {
  file: File
  settings: ConvertSettingsDto
}
