import sharp from 'sharp'

import type { ConvertSettings, NegateOptions } from '@libs/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public convert({ flip, flop, negate }: ConvertSettings): Promise<Buffer> {
    if (flip) {
      this.flip()
    }

    if (flop) {
      this.flop()
    }

    if (negate) {
      this.negate(negate)
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

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
