import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ALLOWED_IMAGE_FORMATS } from '@scissors/sharp'
import type { Response } from 'express'

import { ConvertService } from './convert.service'
import { ConvertDto } from './dto'
import { MAX_FILE_SIZE } from '../constants'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import type { File } from '@internal/types'

@Controller('convert')
export class ConvertController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: MAX_FILE_SIZE
      },
      fileFilter(
        _req,
        file: {
          fieldname: string
          mimetype: string
        },
        // eslint-disable-next-line no-unused-vars
        callback: (error: Error | null, acceptFile: boolean) => void
      ) {
        if (!ALLOWED_IMAGE_FORMATS.includes(file.mimetype)) {
          callback(new Error('Unsupported file format'), false)
          return
        }

        if (file.fieldname !== 'file') {
          callback(new Error('Unsupported field name'), false)
          return
        }

        callback(null, true)
      }
    })
  )
  public async convert(
    @Res() res: Response,
    @UploadedFile() file: File,
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

    // FIXME: set content type
    // res.set('Content-Type', 'image/jpeg')
    res.send(buffer)
  }
}
