import type { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'

import { ALLOWED_IMAGE_FORMATS } from '@scissors/sharp'

import { MAX_FILE_SIZE } from '@config/limits'

export const fileInterceptorOptions: MulterOptions = {
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
}
