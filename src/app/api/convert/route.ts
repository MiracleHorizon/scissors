import { type NextRequest, NextResponse } from 'next/server'
import isEmpty from 'lodash.isempty'

import { Sharp } from '@libs/Sharp/Sharp'
import type { ConvertSettings } from '@libs/Sharp'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const settingsJSON = formData.get('settings') as string | null

  if (!file) {
    throw new Error('Image file is missing')
  }

  if (!settingsJSON) {
    throw new Error('Convert settings are missing')
  }

  try {
    const settings = JSON.parse(settingsJSON) as ConvertSettings

    if (typeof settings !== 'object') {
      return Promise.reject('Invalid convert settings')
    }

    const imageBuffer = await file.arrayBuffer()

    if (isEmpty(settings)) {
      return new NextResponse(imageBuffer)
    }

    const imageSharp = new Sharp(imageBuffer)
    const convertedImageBuffer = await imageSharp.convert(settings)

    return new NextResponse(convertedImageBuffer)
  } catch (err) {
    throw new Error('An error occurred while parsing conversion settings', {
      cause: err
    })
  }
}
