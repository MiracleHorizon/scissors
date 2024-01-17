import sharp, {
  type Color,
  type ExtendWith,
  type FitEnum,
  type KernelEnum,
  type Stats
} from 'sharp'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import { getStatsOrNull } from './getStatsOrNull'
import { RESIZE_OPERATION_NAME } from './constants'
import type { ExtendOptions, ResizeOptions, ResizeSettings, TrimOptions } from './types'

export class SharpResizer {
  private imageSharp: sharp.Sharp
  private stats: Stats | null = null

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  /* eslint-disable no-await-in-loop */
  public async resizeImage({ queue, resize, extend, trim }: ResizeSettings): Promise<Buffer> {
    if (queue.length === 0) {
      return this.toBuffer()
    }

    await this.initialiseStats()

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

  private async initialiseStats(): Promise<void> {
    const stats = await getStatsOrNull(this.imageSharp)
    if (stats) this.stats = stats
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
      background = this.getBackground(options.background, options.withDominantBackground)
    }

    try {
      this.imageSharp.resize({
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
      background = this.getBackground(options.background, options.withDominantBackground)
    }

    try {
      this.imageSharp.extend({
        top: top ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined,
        right: right ?? undefined,
        extendWith: (options.extendWith as ExtendWith | null) ?? undefined,
        background
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

  private async trim(options: TrimOptions): Promise<void> {
    const isValid = YupSettingsValidator.isTrimValid(options)
    if (!isValid) {
      throw new Error('Invalid trim options')
    }

    const { background, threshold } = options
    // sharp v0.33.2
    // const { background, lineArt, threshold } = options

    try {
      this.imageSharp.trim({
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

  private getBackground(background: string, withDominantBackground: boolean): Color {
    if (!this.stats && withDominantBackground) {
      throw new Error('Failed to operate with the dominant background color')
    }

    if (!this.stats || !withDominantBackground) {
      return background
    }

    return this.stats.dominant
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
