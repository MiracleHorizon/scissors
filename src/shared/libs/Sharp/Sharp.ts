import sharp from 'sharp'

import type { ConvertSettings } from '@libs/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public convert({ flip, flop }: ConvertSettings): Promise<Buffer> {
    if (flip) {
      this.flip()
    }

    if (flop) {
      this.flop()
    }

    return this.toBuffer()
  }

  public flip(): void {
    this.imageSharp.flip()
  }

  public flop(): void {
    this.imageSharp.flop()
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
