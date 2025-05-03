import sharp, { type Color } from 'sharp'

import type { ImageFileFormat } from '@scissors/sharp'

export abstract class Sharp {
  /*
   * Not readonly because it is may be overridden / overloaded in subclasses
   */
  protected sharp: sharp.Sharp
  protected stats: sharp.Stats | null = null

  protected constructor(buffer: ArrayBuffer) {
    this.sharp = sharp(buffer)
  }

  protected async initialiseInputStatistics(): Promise<void> {
    try {
      this.stats = await this.sharp.stats()
    } catch (err) {
      if (err instanceof Error) {
        console.warn(`Failed to get image stats: ${err.message}`)
        return
      }

      console.warn('Something went wrong with the image stats operation', err)
    }
  }

  protected getBackground({
    background,
    withDominantBackground
  }: {
    background: string
    withDominantBackground: boolean
  }): Color {
    if (!withDominantBackground) {
      return background
    }

    if (!this.stats) {
      throw new Error('Failed to operate with the dominant background')
    }

    return this.stats.dominant
  }

  protected toFormat(format: ImageFileFormat): void {
    try {
      this.sharp.toFormat(format)
    } catch (err) {
      console.error(err)

      throw new Error(`Failed to convert the image to the .${format} format`, {
        cause: err
      })
    }
  }

  protected async toBuffer(): Promise<Buffer> {
    return this.sharp.toBuffer()
  }
}
