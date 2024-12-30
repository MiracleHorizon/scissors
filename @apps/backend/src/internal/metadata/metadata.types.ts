import type { HandleMetadataSettingsDto } from './dto'
import type { MulterFile } from '@internal//types'

export interface MetadataServiceAbstraction {
  // eslint-disable-next-line no-unused-vars
  handle(params: HandleMetadataParams): Promise<Buffer>
}

export interface HandleMetadataParams {
  file: MulterFile
  settings: HandleMetadataSettingsDto
}
