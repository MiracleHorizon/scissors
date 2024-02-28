import { HttpException, Injectable } from '@nestjs/common'

import { ImageResizer } from '@internal/business/sharp'
import type { ResizeParams, ResizeServiceAbstraction } from './resize.types'

@Injectable()
export class ResizeService implements ResizeServiceAbstraction {
  public async resize({ file, settings }: ResizeParams): Promise<Buffer> {
    const imageResizer = new ImageResizer(file.buffer)

    try {
      return imageResizer.resizeImage(settings)
    } catch (err) {
      throw new HttpException('Failed to resize the image', 500)
    }
  }
}
