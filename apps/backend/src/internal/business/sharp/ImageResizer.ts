import sharp from 'sharp'

import { ImageSharp } from './ImageSharp'
import {
  ExtendOptionsDto,
  TrimOptionsDto,
  ResizeOptionsDto,
  ExtractOptionsDto,
  ResizeSettingsDto
} from '@internal/resize/dto'
import { isAllObjectValuesEmpty } from '@helpers/isAllObjectValuesEmpty'
import { nullToUndefined } from '@helpers/nullToUndefined'
import { RESIZE_OPERATION } from '@internal/resize/resize.constants'

export class ImageResizer extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
  }

  /* eslint-disable no-await-in-loop */
  public async resizeImage({
    queue,
    resize,
    extend,
    extract,
    trim
  }: ResizeSettingsDto): Promise<Buffer> {
    this.sharp.keepMetadata()

    if (queue.length === 0) {
      return this.toBuffer()
    }

    await this.initialiseInputStatistics()

    for (const { name } of Object.values(queue)) {
      if (name === RESIZE_OPERATION.RESIZE && resize) {
        await this.resize(resize)
      }

      if (name === RESIZE_OPERATION.EXTEND && extend) {
        await this.extend(extend)
      }

      if (name === RESIZE_OPERATION.EXTRACT && extract) {
        await this.extract(extract)
      }

      if (name === RESIZE_OPERATION.TRIM && trim) {
        await this.trim(trim)
      }
    }

    return this.toBuffer()
  }

  private async resize({
    background: bg,
    withDominantBackground,
    ...options
  }: ResizeOptionsDto): Promise<void> {
    if (!options.width && !options.height) return

    let background
    if (bg) {
      background = this.getBackground({
        background: bg,
        withDominantBackground
      })
    }

    try {
      this.sharp.resize({
        ...Object.fromEntries(
          Object.entries(options).map(([option, value]) => [option, nullToUndefined(value)])
        ),
        background
      })

      // Updating sharp with new buffer for correct queue operations after resizing.
      const updatedBuffer = await this.toBuffer()
      this.sharp = sharp(updatedBuffer)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to resize the image', {
        cause: err
      })
    }
  }

  private async extend({
    withDominantBackground,
    extendWith,
    background: bg,
    ...sizes
  }: ExtendOptionsDto): Promise<void> {
    if (isAllObjectValuesEmpty(sizes)) return

    let background
    if (bg) {
      background = this.getBackground({
        background: bg,
        withDominantBackground
      })
    }

    try {
      this.sharp.extend({
        ...Object.fromEntries(
          Object.entries({
            ...sizes,
            extendWith
          }).map(([option, value]) => [option, nullToUndefined(value)])
        ),
        background
      })

      // Updating sharp with new buffer for correct queue operations after extending.
      const updatedBuffer = await this.toBuffer()
      this.sharp = sharp(updatedBuffer)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to extend the image', {
        cause: err
      })
    }
  }

  private async extract(options: ExtractOptionsDto): Promise<void> {
    try {
      this.sharp.extract(options)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to extract the region from the image', {
        cause: err
      })
    }
  }

  private async trim({ lineArt, ...options }: TrimOptionsDto): Promise<void> {
    try {
      this.sharp.trim({
        ...Object.fromEntries(
          Object.entries(options).map(([option, value]) => [option, nullToUndefined(value)])
        ),
        lineArt
      })
    } catch (err) {
      console.error(err)

      throw new Error('Failed to trim the image', {
        cause: err
      })
    }
  }
}
