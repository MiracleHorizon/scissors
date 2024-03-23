import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Response } from 'express'

import { ConvertService } from './convert.service'
import { ConvertDto } from './dto'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import { CONVERT_ENDPOINT } from '@config/endpoints'
import { fileInterceptorOptions } from '@lib/validation'
import type { MulterFile } from '@internal/types'

@Controller(CONVERT_ENDPOINT)
export class ConvertController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', fileInterceptorOptions))
  public async convert(
    @Res() res: Response,
    @UploadedFile() file: MulterFile,
    /* eslint-disable indent */
    @Body(
      new ParseFormDataJsonPipe({
        except: ['file']
      })
    )
    body: ConvertDto
  ): Promise<void> {
    const buffer = await this.convertService.convert({
      file,
      settings: body.settings
    })

    res.status(200).send(buffer)
  }
}
