import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'

import { config } from './config/configuration'
import { ConvertModule } from '@internal/convert'
import { ResizeModule } from '@internal/resize'

@Module({
  imports: [ConfigModule.forRoot(config), MulterModule.register(), ConvertModule, ResizeModule]
})
export class AppModule {}
