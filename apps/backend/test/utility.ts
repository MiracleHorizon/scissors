import request from 'supertest'
import type { App } from 'supertest/types'

export const sendMockServerRequestWithFileAndSettings = ({
  server,
  endpoint,
  fileBuffer,
  settings
}: {
  server: App
  endpoint: string
  fileBuffer: Buffer
  settings: unknown
}) =>
  request(server)
    .post(endpoint)
    .attach('file', fileBuffer)
    .field('settings', JSON.stringify(settings))
