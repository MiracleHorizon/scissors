import sharp from 'sharp'

import type { ConvertSettings, NegateOptions, NormaliseOptions } from '@libs/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public convert({ flip, flop, negate, normalise }: ConvertSettings): Promise<Buffer> {
    if (flip) {
      this.flip()
    }

    if (flop) {
      this.flop()
    }

    if (negate) {
      this.negate(negate)
    }

    if (normalise) {
      this.normalise(normalise)
    }

    return this.toBuffer()
  }

  private flip(): void {
    this.imageSharp.flip()
  }

  private flop(): void {
    this.imageSharp.flop()
  }

  private negate({ value, alpha }: NegateOptions): void {
    if (!value) return

    this.imageSharp.negate({ alpha })
  }

  private normalise(options: NormaliseOptions): void {
    try {
      this.imageSharp.normalise(options)
    } catch (err) {
      throw new Error('Failed to normalise the image', {
        cause: err
      })
    }
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
