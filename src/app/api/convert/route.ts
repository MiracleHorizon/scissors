import { type NextRequest, NextResponse } from 'next/server'
import isEmpty from 'lodash.isempty'

import { Sharp } from '@server/Sharp/Sharp'
import { isValidFileSize } from '@helpers/isValidFileSize'
import { ConvertSettingsValidator } from '@utils/ConvertSettingsValidator'
import type { ConvertSettings } from '@server/Sharp'

export const errorMessages = {
  missingFile: 'No image file is available',
  missingSettings: 'No conversion settings are available',
  invalidFileSize: 'Invalid file size',
  invalidSettings: 'Invalid convert settings',
  invalidDataTransferObject: 'Invalid data transfer object'
}

export async function POST(req: NextRequest) {
  let formData: FormData

  try {
    formData = await req.formData()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return createResponseError(errorMessages.invalidDataTransferObject, 400)
  }

  const file = formData.get('file') as File | null
  if (!file) {
    return createResponseError(errorMessages.missingFile, 400)
  } else if (!isValidFileSize(file)) {
    return createResponseError(errorMessages.invalidFileSize, 413)
  }

  const settingsJSON = formData.get('settings') as string | null
  if (!settingsJSON) {
    return createResponseError(errorMessages.missingSettings, 400)
  }

  // Try to parse settings JSON and validate it
  let settings: ConvertSettings | null = null

  try {
    const parsedSettings = JSON.parse(settingsJSON) as ConvertSettings

    const isValidSettings = ConvertSettingsValidator.validate(parsedSettings)
    if (!isValidSettings) {
      return createResponseError(errorMessages.invalidSettings, 400)
    }

    settings = parsedSettings
  } catch (err) {
    // Handle JSON parsing error
    if (err instanceof SyntaxError) {
      return createResponseError(errorMessages.invalidSettings, 400)
    }

    return createResponseError('An error occurred while parsing conversion settings', 500)
  }

  // Try to convert image file with provided settings
  try {
    const imageBuffer = await file.arrayBuffer()

    if (isEmpty(settings)) {
      return new NextResponse(imageBuffer)
    }

    const imageSharp = new Sharp(imageBuffer)
    const convertedImageBuffer = await imageSharp.convert(settings)

    return new NextResponse(convertedImageBuffer)
  } catch (err) {
    if (err instanceof Error) {
      return createResponseError(err.message, 500)
    }

    return createResponseError('An error occurred while converting the image', 500)
  }
}

const createResponseError = (message: string, status: number) =>
  NextResponse.json({ error: message }, { status, statusText: message })
