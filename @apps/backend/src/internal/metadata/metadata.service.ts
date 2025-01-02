import { HttpException, Injectable } from '@nestjs/common'

import { ImageMetadataHandler } from '@internal/business/sharp'
import type { HandleMetadataParams, MetadataServiceAbstraction } from './metadata.types'

@Injectable()
export class MetadataService implements MetadataServiceAbstraction {
  public async handle({ file, settings }: HandleMetadataParams): Promise<Buffer> {
    const imageMetadataHandler = new ImageMetadataHandler(file.buffer)

    try {
      return imageMetadataHandler.handle(settings)
    } catch (err) {
      console.error(err)

      throw new HttpException('Failed to handle metadata of the image', 500, {
        cause: err,
        description: err.message
      })
    }
  }
}
