import { type ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO: Validation
@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    const oneMb = 1024 * 1024

    return value.size < oneMb
  }
}
