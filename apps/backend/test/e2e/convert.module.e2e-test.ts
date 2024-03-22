import { Test } from '@nestjs/testing'
import * as fs from 'fs'
import type { INestApplication } from '@nestjs/common'

import { generateInvalidConvertSettings, validConvertSettings } from '@scissors/test-utils'

import { ConvertModule } from '@internal/convert'
import { CONVERT_ENDPOINT } from '@config/endpoints'
import { testImageFilePath } from '@test/config'
import { sendMockServerRequestWithFileAndSettings } from '@test/utility'

describe('ConvertModule (e2e)', () => {
  let app: INestApplication
  let buffer: Buffer

  beforeAll(() => {
    buffer = fs.readFileSync(testImageFilePath)
  })

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConvertModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('should convert successfully (200) with valid settings', () => {
    expect(buffer).toBeTruthy()

    const server = app.getHttpServer()
    const result = sendMockServerRequestWithFileAndSettings({
      server,
      endpoint: CONVERT_ENDPOINT,
      fileBuffer: buffer,
      settings: validConvertSettings
    })

    result.expect(200)
  })

  it('should not convert successfully (500) with invalid settings', () => {
    expect(buffer).toBeTruthy()

    const server = app.getHttpServer()
    const result = sendMockServerRequestWithFileAndSettings({
      server,
      endpoint: CONVERT_ENDPOINT,
      fileBuffer: buffer,
      settings: generateInvalidConvertSettings()
    })

    result.expect(500)
  })
})
