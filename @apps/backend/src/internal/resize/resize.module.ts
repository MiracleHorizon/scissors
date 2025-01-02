import { Module } from '@nestjs/common'

import { ResizeService } from './resize.service'
import { ResizeController } from './resize.controller'

@Module({
  controllers: [ResizeController],
  providers: [ResizeService]
})
export class ResizeModule {}
