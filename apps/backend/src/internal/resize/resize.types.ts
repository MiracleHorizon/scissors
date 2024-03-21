import type { MulterFile } from '@internal/types'
import type { ResizeSettingsDto } from './dto'

export interface ResizeServiceAbstraction {
  // eslint-disable-next-line no-unused-vars
  resize(params: ResizeParams): Promise<Buffer>
}

export interface ResizeParams {
  file: MulterFile
  settings: ResizeSettingsDto
}
