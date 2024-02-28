import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'
import { corsOptions } from './cors/options'

async function bootstrap() {
  const PORT = process.env.PORT || 4200
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors(corsOptions)

  app.listen(PORT).then(() => {
    console.log(`Listening on port: ${PORT}`)
  })
}

void bootstrap()