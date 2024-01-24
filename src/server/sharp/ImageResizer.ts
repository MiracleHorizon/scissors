import sharp, { type ExtendWith, type FitEnum, type KernelEnum } from 'sharp'

import { ImageSharp } from './ImageSharp'
import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { RESIZE_OPERATION_NAME } from './constants'
import type { ExtendOptions, ResizeOptions, ResizeSettings, TrimOptions } from './types'

export class ImageResizer extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
  }

  /* eslint-disable no-await-in-loop */
  public async resizeImage({ queue, resize, extend, trim }: ResizeSettings): Promise<Buffer> {
    if (queue.length === 0) {
      return this.toBuffer()
    }

    await this.initialiseInputStatistics()

    for (const { name } of Object.values(queue)) {
      if (name === RESIZE_OPERATION_NAME.RESIZE && resize) {
        await this.resize(resize)
      }

      if (name === RESIZE_OPERATION_NAME.EXTEND && extend) {
        await this.extend(extend)
      }

      if (name === RESIZE_OPERATION_NAME.TRIM && trim) {
        await this.trim(trim)
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

    let background
    if (options.background) {
      background = this.getBackground({
        background: options.background,
        withDominantBackground: options.withDominantBackground
      })
    }

    try {
      this.sharp.resize({
        width: width ?? undefined,
        height: height ?? undefined,
        fit: (options.fit as keyof FitEnum | null) ?? undefined,
        position: options.position ?? undefined,
        kernel: (options.kernel as keyof KernelEnum | null) ?? undefined,
        background
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

    let background
    if (options.background) {
      background = this.getBackground({
        background: options.background,
        withDominantBackground: options.withDominantBackground
      })
    }

    try {
      this.sharp.extend({
        top: top ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined,
        right: right ?? undefined,
        extendWith: (options.extendWith as ExtendWith | null) ?? undefined,
        background
      })

      // Updating sharp with new buffer for correct queue operations after extending.
      const updatedBuffer = await this.toBuffer()
      this.sharp = sharp(updatedBuffer)
    } catch (err) {
      throw new Error('Failed to extend the image', {
        cause: err
      })
    }
  }

  private async trim(options: TrimOptions): Promise<void> {
    const isValid = YupSettingsValidator.isTrimValid(options)
    if (!isValid) {
      throw new Error('Invalid trim options')
    }

    const { background, threshold } = options
    // sharp v0.33.2
    // const { background, lineArt, threshold } = options

    try {
      this.sharp.trim({
        background: background ?? undefined,
        threshold: threshold ?? undefined
        // sharp v0.33.2
        // lineArt
      })
    } catch (err) {
      throw new Error('Failed to trim the image', {
        cause: err
      })
    }
  }
}
