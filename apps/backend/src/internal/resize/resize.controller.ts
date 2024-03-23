import {
  Body,
  Controller,
  HttpException,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  ValidationPipe
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Response } from 'express'

import { ResizeService } from './resize.service'
import { ResizeDto } from './dto'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import { RESIZE_ENDPOINT } from '@config/endpoints'
import { fileInterceptorOptions } from '@lib/validation'
import type { MulterFile } from '@internal/types'

@Controller(RESIZE_ENDPOINT)
export class ResizeController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly resizeService: ResizeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', fileInterceptorOptions))
  public async resize(
    @Res() res: Response,
    @UploadedFile() file: MulterFile,
    /* eslint-disable indent */
    @Body(
      new ParseFormDataJsonPipe({
        except: ['file']
      }),
      new ValidationPipe()
    )
    { settings }: ResizeDto
  ): Promise<void> {
    const resize = settings.resize
    if (resize) {
      const { width, height } = resize
      if (width === null && height === null) {
        throw new HttpException('Width and height cannot be null', 400)
      }
    }

    const buffer = await this.resizeService.resize({
      file,
      settings
    })

    res.status(200).send(buffer)
  }
}
