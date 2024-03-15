import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Response } from 'express'

import { MetadataService } from './metadata.service'
import { HandleMetadataSettingsDto } from './dto'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import type { File } from '@internal/types'

@Controller('metadata')
export class MetadataController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly metadataService: MetadataService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async handle(
    @Res() res: Response,
    @UploadedFile() file: File,
    /* eslint-disable indent */
    @Body(
      new ParseFormDataJsonPipe({
        except: ['file']
      })
    )
    body: {
      settings: HandleMetadataSettingsDto
    }
  ): Promise<void> {
    const buffer = await this.metadataService.handle({
      file,
      settings: body.settings
    })

    // FIXME: set content type
    // res.set('Content-Type', 'image/jpeg')
    res.send(buffer)
  }
}
