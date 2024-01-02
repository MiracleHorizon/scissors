import { type NextRequest, NextResponse } from 'next/server'
import isEmpty from 'lodash.isempty'

import { Sharp } from '@server/Sharp/Sharp'
import { isValidFileSize } from '@helpers/isValidFileSize'
import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'
import type { ConvertSettings } from '@server/Sharp'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const settingsJSON = formData.get('settings') as string | null

  if (!file) {
    return createResponseError('Image file is missing', 400)
  }

  if (!isValidFileSize(file)) {
    return createResponseError('Invalid file size', 413)
  }

  if (!settingsJSON) {
    return createResponseError('Convert settings are missing', 400)
  }

  try {
    const settings = JSON.parse(settingsJSON) as ConvertSettings
    const isValid = ConvertSettingsValidator.validate(settings)

    if (!isValid) {
      return createResponseError('Invalid convert settings', 400)
    }

    const imageBuffer = await file.arrayBuffer()

    if (isEmpty(settings)) {
      return new NextResponse(imageBuffer)
    }

    const imageSharp = new Sharp(imageBuffer)
    const convertedImageBuffer = await imageSharp.convert(settings)

    return new NextResponse(convertedImageBuffer)
  } catch (err) {
    if (err instanceof SyntaxError) {
      return createResponseError('Invalid convert settings', 400)
    }

    if (err instanceof Error) {
      return createResponseError(err.message, 500)
    }

    return createResponseError('An error occurred while parsing conversion settings', 500)
  }
}

function createResponseError(message: string, status: number) {
  return NextResponse.json(
    {
      error: message
    },
    {
      status,
      statusText: message
    }
  )
}
