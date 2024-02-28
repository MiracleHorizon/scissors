import sharp from 'sharp'

import { ImageSharp } from './ImageSharp'
import { nullToUndefined } from '@helpers/nullToUndefined'
import { RESIZE_OPERATION_NAME } from '@internal/resize/resize.constants'
import type { ExtendOptionsDto, ResizeOptionsDto, ResizeSettingsDto } from '@internal/resize/dto'

export class ImageResizer extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
  }

  public async resizeImage({ queue, resize, extend }: ResizeSettingsDto): Promise<Buffer> {
    if (queue.length === 0) {
      return this.toBuffer()
    }

    await this.initialiseInputStatistics()

    for (const operation of queue) {
      if (operation.name === RESIZE_OPERATION_NAME.RESIZE && resize) {
        await this.resize(resize)
      }

      if (operation.name === RESIZE_OPERATION_NAME.EXTEND && extend) {
        await this.extend(extend)
      }
    }

    if (resize) {
      await this.resize(resize)
    }

    if (extend) {
      await this.extend(extend)
    }

    return this.toBuffer()
  }

  private async resize({ background: bg, ...options }: ResizeOptionsDto): Promise<void> {
    if (!options.width && !options.height) return

    let background
    if (bg) {
      background = this.getBackground(bg, options.withDominantBackground)
    }

    try {
      this.sharp.resize({
        ...Object.values(options).map(nullToUndefined),
        background
      })
    } catch (err) {
      console.error(err)

      throw new Error('Failed to perform image resizing operation')
    }
  }

  private async extend({ background: bg, ...options }: ExtendOptionsDto): Promise<void> {
    const { top, bottom, left, right } = options
    if (!top && !bottom && !left && !right) return

    let background
    if (bg) {
      background = this.getBackground(bg, options.withDominantBackground)
    }

    try {
      this.sharp.extend({
        ...Object.values(options).map(nullToUndefined),
        background
      })

      // Updating sharp with new buffer for correct queue operations after extending
      const updatedBuffer = await this.toBuffer()
      this.sharp = sharp(updatedBuffer)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to perform image extending operation')
    }
  }
}
