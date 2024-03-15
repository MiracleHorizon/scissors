import sharp from 'sharp'
import capitalize from 'lodash.capitalize'

import { ImageSharp } from './ImageSharp'
import type { HandleMetadataSettingsDto } from '@internal/metadata/dto'

export class ImageMetadataHandler extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
  }

  public async handle({ ifd0, ifd2 }: HandleMetadataSettingsDto): Promise<Buffer> {
    const exifPayload: sharp.Exif = {}
    if (ifd0) {
      exifPayload.IFD0 = this.handleExifPayload(ifd0)
    }
    if (ifd2) {
      exifPayload.IFD2 = this.handleExifPayload(ifd2)
    }

    return this.sharp.withExif(exifPayload).toBuffer()
  }

  private handleExifPayload(payload: Record<string, any>): Record<string, NonNullable<any>> {
    const entries = Object.entries(payload)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => {
        const replaceRegex = /([a-z])([A-Z])/g
        const k = key
          .replace(replaceRegex, '$1 $2')
          .split(' ')
          .map(s => capitalize(s))
          .join('')

        let v = value
        if (value instanceof Date) {
          v = value.toDateString()
        } else if (typeof v !== 'string') {
          v = v.toString()
        }

        return [k, v]
      })

    return Object.fromEntries(entries)
  }
}
