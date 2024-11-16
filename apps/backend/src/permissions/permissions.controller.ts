import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'

import { Controller, Get, HttpException, Query } from '@nestjs/common'

type Permission = {
  enabled_for: {
    production: boolean
    development: boolean
  }
}

@Controller('permissions')
export class PermissionsController {
  constructor() {}

  @Get('all')
  public async getPermissions(@Query('environment') environment: string) {
    try {
      const filePath = resolve('./src/permissions/permissions.json')
      const permissions = await readFile(filePath, {
        encoding: 'utf8'
      })

      return Object.entries(JSON.parse(permissions) as Permission[])
        .map(([key, value]) => (value['enabled_for'][environment] ? key : null))
        .filter(Boolean)
    } catch (err) {
      console.log(err)

      throw new HttpException('Failed to get permissions', 500)
    }
  }
}
