import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Response } from 'express'

import { ResizeService } from './resize.service'
import { ResizeDto } from './dto'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import type { File } from '@internal/types'

@Controller('resize')
export class ResizeController {
  constructor(private readonly resizeService: ResizeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async resize(
    @Res() res: Response,
    @UploadedFile() file: File,
    @Body(
      new ParseFormDataJsonPipe({
        except: ['file']
      })
    )
    body: ResizeDto
  ): Promise<void> {
    const buffer = await this.resizeService.resize({
      file,
      settings: body.settings
    })

    // FIXME: set content type
    // res.set('Content-Type', 'image/jpeg')
    res.send(buffer)
  }
}
