import { type NextRequest, NextResponse } from 'next/server'

import { ImageConverter } from '@server/sharp/ImageConverter'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { isAllObjectValuesEmpty } from '@helpers/isAllObjectValuesEmpty'
import { YupSettingsValidator } from '@utility/YupSettingsValidator'
import { errorMessages } from '@api/convert-image'
import type { ConvertSettings } from '@server/sharp'

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
  } else if (!isValidFileSize(file.size)) {
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

    const isValidSettings = YupSettingsValidator.validateConvert(parsedSettings)
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

    if (isAllObjectValuesEmpty(settings)) {
      return new NextResponse(imageBuffer)
    }

    const imageConverter = new ImageConverter(imageBuffer)
    const convertedImageBuffer = await imageConverter.convert(settings)

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
