import { HttpException, Injectable } from '@nestjs/common'

import { ImageResizer } from '@internal/business/sharp'
import type { ResizeParams, ResizeServiceAbstraction } from './resize.types'

@Injectable()
export class ResizeService implements ResizeServiceAbstraction {
  public async resize({ file, settings }: ResizeParams): Promise<Buffer> {
    if (settings.queue.length === 0) {
      return file.buffer
    }

    const imageResizer = new ImageResizer(file.buffer)

    try {
      return imageResizer.resizeImage(settings)
    } catch (err) {
      console.error(err)

      throw new HttpException('Failed to resize the image', 500, {
        cause: err,
        description: err.message
      })
    }
  }
}
