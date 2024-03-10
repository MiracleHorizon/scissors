import type { CropperData } from './types'
import type { ExtractRegion } from '@server/sharp'

export function extractRegionToCropperData(extractRegion: ExtractRegion): CropperData {
  const { left: x, top: y, width, height } = extractRegion

  return {
    x,
    y,
    width,
    height
  }
}

export function cropperDataToExtractRegion(cropperData: CropperData): ExtractRegion {
  const { x, y, width, height } = cropperData

  const extractRegion = {
    left: x,
    top: y,
    width,
    height
  }
  const extractRegionEntries = Object.entries(extractRegion)
  const flooredExtractRegionEntries = extractRegionEntries.map(([key, value]) => {
    const v = Math.floor(value)

    return [key, v < 0 ? 0 : v]
  })

  return Object.fromEntries(flooredExtractRegionEntries)
}
