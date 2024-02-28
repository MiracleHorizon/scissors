import { type ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

// TODO: Validation
@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    const oneMb = 1024 * 1024

    return value.size < oneMb
  }
}
