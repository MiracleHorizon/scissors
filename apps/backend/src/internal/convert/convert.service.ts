import { HttpException, Injectable } from '@nestjs/common'

import { ImageConverter } from '@internal/business/sharp'
import { isAllObjectValuesEmpty } from '@helpers/isAllObjectValuesEmpty'
import type { ConvertParams, ConvertServiceAbstraction } from './convert.types'

@Injectable()
export class ConvertService implements ConvertServiceAbstraction {
  public async convert({ settings, file }: ConvertParams): Promise<Buffer> {
    if (isAllObjectValuesEmpty(settings)) {
      return file.buffer
    }

    const imageConverter = new ImageConverter(file.buffer)

    try {
      return imageConverter.convert(settings)
    } catch (err) {
      console.error(err)

      throw new HttpException('Failed to convert the image', 500, {
        cause: err,
        description: err.message
      })
    }
  }
}
