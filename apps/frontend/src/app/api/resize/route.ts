import { type NextRequest, NextResponse } from 'next/server'

import { ImageResizer } from '@server/sharp/ImageResizer'
import { YupSettingsValidator } from '@utility/YupSettingsValidator'
import { isValidFileSize } from '@helpers/file/isValidFileSize'
import { errorMessages } from '@api/resize-image'
import type { ResizeSettings } from '@server/sharp'

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
  let settings: ResizeSettings | null = null

  try {
    const parsedSettings = JSON.parse(settingsJSON) as ResizeSettings

    const isValidSettings = YupSettingsValidator.validateResize(parsedSettings)
    if (!isValidSettings) {
      return createResponseError(errorMessages.invalidSettings, 400)
    }

    settings = parsedSettings
  } catch (err) {
    // Handle JSON parsing error
    if (err instanceof SyntaxError) {
      return createResponseError(errorMessages.invalidSettings, 400)
    }

    return createResponseError('An error occurred while parsing resizing settings', 500)
  }

  // Try to resize image file with provided settings
  try {
    const imageBuffer = await file.arrayBuffer()

    if (settings.queue.length === 0) {
      return new NextResponse(imageBuffer)
    }

    const imageResizer = new ImageResizer(imageBuffer)
    const resizedImageBuffer = await imageResizer.resizeImage(settings)

    return new NextResponse(resizedImageBuffer)
  } catch (err) {
    if (err instanceof Error) {
      return createResponseError(err.message, 500)
    }

    return createResponseError('An error occurred while resizing the image', 500)
  }
}

const createResponseError = (message: string, status: number) =>
  NextResponse.json({ error: message }, { status, statusText: message })
