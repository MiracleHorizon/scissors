import sharp from 'sharp'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import type { ExtendOptions, ResizeOptions, ResizeSettings } from './Sharp.types'

export class SharpResizer {
  private imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  /* eslint-disable no-await-in-loop */
  public async resizeImage({ queue, resize, extend }: ResizeSettings): Promise<Buffer> {
    if (queue.length === 0) {
      return this.toBuffer()
    }

    for (const { operationName } of Object.values(queue)) {
      if (operationName === 'resize' && resize) {
        await this.resize(resize)
      }

      if (operationName === 'extend' && extend) {
        await this.extend(extend)
      }
    }

    return this.toBuffer()
  }

  private async resize({ width, height, ...options }: ResizeOptions): Promise<void> {
    if (!width && !height) return

    const isValid = YupSettingsValidator.isResizeValid({
      width,
      height,
      ...options
    })
    if (!isValid) {
      throw new Error('Invalid resize options')
    }

    try {
      this.imageSharp.resize({
        width: width ?? undefined,
        height: height ?? undefined,
        fit: options.fit ?? undefined,
        background: options.background ?? undefined,
        position: options.position ?? undefined,
        kernel: options.kernel ?? undefined
      })
    } catch (err) {
      throw new Error('Failed to resize the image', {
        cause: err
      })
    }
  }

  private async extend(options: ExtendOptions): Promise<void> {
    const isValid = YupSettingsValidator.isExtendValid(options)
    if (!isValid) {
      throw new Error('Invalid extend options')
    }

    const { top, bottom, left, right } = options
    if (!top && !bottom && !left && !right) return

    try {
      this.imageSharp.extend({
        top: top ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined,
        right: right ?? undefined,
        extendWith: options.extendWith ?? undefined,
        background: options.background ?? undefined
      })

      // Updating sharp with new buffer for correct queue operations after extending.
      const updatedBuffer = await this.toBuffer()
      this.imageSharp = sharp(updatedBuffer)
    } catch (err) {
      throw new Error('Failed to extend the image', {
        cause: err
      })
    }
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
