import { z } from 'zod'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'node:path'

dotenvConfig({
  path: resolve(__dirname, '..', '..', '..', '.env')
})

// TODO: https://v4.zod.dev/v4
const envSchema = z.object({
  // TODO: Зачем client api и site domain вместе?
  CLIENT_API: z.string().url().default('http://localhost:3000'),
  SITE_DOMAIN: z.string().default('http://localhost:3000'),
  SERVER_API: z.string().url().default('http://localhost:4200'),
  AI_SERVER_API: z.string().url().default('http://localhost:4201'),
  S3_SERVER_API: z.string().url().default('http://localhost:4202'),

  NODE_ENV: z.enum(['development', 'production']).default('development'),
  SERVER_PORT: z.string().optional().default('4200'),
  AI_SERVER_PORT: z.string().optional().default('4201'),
  S3_SERVER_PORT: z.string().optional().default('4202'),

  YANDEX_CLOUD_API_KEY: z.string().optional(),
  YANDEX_CLOUD_FOLDER: z.string().optional()
})

export const config = envSchema.parse(process.env)
