import type { ConvertSettingsDto } from './dto'
import type { MulterFile } from '@internal/types'

export interface ConvertServiceAbstraction {
  // eslint-disable-next-line no-unused-vars
  convert(params: ConvertParams): Promise<Buffer>
}

export interface ConvertParams {
  file: MulterFile
  settings: ConvertSettingsDto
}
