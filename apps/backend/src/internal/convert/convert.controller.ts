import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { Response } from 'express'

import { ConvertService } from './convert.service'
import { ConvertDto } from './dto'
import { MAX_FILE_SIZE, OUTPUT_FORMATS } from '../constants'
import { ParseFormDataJsonPipe } from '@pipes/form-data-parse.pipe'
import type { File } from '@internal/types'

@Controller('convert')
export class ConvertController {
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
        callback: (error: Error | null, acceptFile: boolean) => void
      ) {
        const allowedMimeTypes = Object.values(OUTPUT_FORMATS).map(format => `image/${format}`)

        if (!allowedMimeTypes.includes(file.mimetype)) {
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
