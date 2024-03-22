import { Test } from '@nestjs/testing'
import * as fs from 'fs'
import type { INestApplication } from '@nestjs/common'

import { generateInvalidResizeSettings, validResizeSettings } from '@scissors/test-utils'

import { ResizeModule } from '@internal/resize'
import { RESIZE_ENDPOINT } from '@config/endpoints'
import { testImageFilePath } from '@test/config'
import { sendMockServerRequestWithFileAndSettings } from '@test/utility'

describe('ResizeModule (e2e)', () => {
  let app: INestApplication
  let buffer: Buffer

  beforeAll(() => {
    buffer = fs.readFileSync(testImageFilePath)
  })

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ResizeModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('should convert successfully (200) with valid settings', () => {
    expect(buffer).toBeTruthy()

    const server = app.getHttpServer()
    const result = sendMockServerRequestWithFileAndSettings({
      server,
      endpoint: RESIZE_ENDPOINT,
      fileBuffer: buffer,
      settings: validResizeSettings
    })

    result.expect(200)
  })

  it('should not convert successfully (500) with invalid settings', () => {
    expect(buffer).toBeTruthy()

    const server = app.getHttpServer()
    const result = sendMockServerRequestWithFileAndSettings({
      server,
      endpoint: RESIZE_ENDPOINT,
      fileBuffer: buffer,
      settings: generateInvalidResizeSettings()
    })

    result.expect(500)
  })
})
