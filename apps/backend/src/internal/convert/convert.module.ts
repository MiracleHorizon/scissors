import { Module } from '@nestjs/common'

import { ConvertService } from './convert.service'
import { ConvertController } from './convert.controller'

@Module({
  controllers: [ConvertController],
  providers: [ConvertService]
})
export class ConvertModule {}
