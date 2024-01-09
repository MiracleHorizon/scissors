import sharp from 'sharp'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import type { ExtendOptions, ResizeOptions, ResizeSettings } from './Sharp.types'

export class SharpResize {
  public readonly imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public async resizeImage({ queue, ...settings }: ResizeSettings) {
    if (queue.length === 0) {
      return this.toBuffer()
    }

    for (const { operationName } of Object.values(queue)) {
      if (operationName === 'resize' && settings.resize) {
        this.resize(settings.resize)
      }

      if (operationName === 'extend' && settings.extend) {
        this.extend(settings.extend)
      }
    }

    return this.toBuffer()
  }

  private resize({ width, height, ...options }: ResizeOptions) {
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

  private extend(options: ExtendOptions): void {
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
