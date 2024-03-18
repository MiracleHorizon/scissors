import type { ConvertSettingsDto } from './dto'
import type { File } from '@internal/types'

export interface ConvertServiceAbstraction {
  // eslint-disable-next-line no-unused-vars
  convert(params: ConvertParams): Promise<Buffer>
}

export interface ConvertParams {
  file: File
  settings: ConvertSettingsDto
}
