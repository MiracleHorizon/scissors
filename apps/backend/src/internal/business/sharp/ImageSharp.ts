import sharp, { type Color } from 'sharp'

export class ImageSharp {
  // Not readonly because it is may be overridden / overloaded in subclasses
  protected sharp: sharp.Sharp
  protected stats: sharp.Stats | null = null

  constructor(buffer: ArrayBuffer) {
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

  // TODO: Allow side-effects with returning background if withDominantBackground if true, but stats is null?
  protected getBackground(background: string, withDominantBackground: boolean): Color {
    if (!withDominantBackground) {
      return background
    }

    if (!this.stats) {
      throw new Error('Failed to operate with the dominant background')
    }

    return this.stats.dominant
  }

  protected async toBuffer(): Promise<Buffer> {
    return this.sharp.toBuffer()
  }
}
