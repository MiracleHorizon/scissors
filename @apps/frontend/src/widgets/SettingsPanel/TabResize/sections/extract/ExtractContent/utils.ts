import type { ExtractRegion } from '@scissors/sharp'

import type { CropperData, CropperImageData } from './types'

export const extractRegionToCropperData = (extractRegion: ExtractRegion): CropperData => {
  const { left: x, top: y, width, height } = extractRegion

  return {
    x,
    y,
    width,
    height
  }
}

export const cropperDataToExtractRegion = ({
  data: { x, y, width, height },
  imageData: { naturalWidth, naturalHeight }
}: {
  data: CropperData
  imageData: CropperImageData
}): ExtractRegion => {
  const isXNegative = x < 0
  const isYNegative = y < 0

  const calcLeft = () => {
    if (isXNegative || x > naturalWidth) {
      return 0
    }

    return x
  }

  const calcTop = () => {
    if (isYNegative || y > naturalHeight) {
      return 0
    }

    return y
  }

  const calcWidth = () => {
    if (isXNegative) {
      return width + x
    }
    if (x > naturalWidth) {
      return 100
    }
    if (x + width > naturalWidth) {
      return naturalWidth - x
    }
    return width
  }

  const calcHeight = () => {
    if (isYNegative) {
      return height + y
    }
    if (y > naturalHeight) {
      return 100
    }
    if (y + height > naturalHeight) {
      return naturalHeight - y
    }
    return height
  }

  const extractRegion = {
    left: calcLeft(),
    top: calcTop(),
    width: calcWidth(),
    height: calcHeight()
  }

  const extractRegionEntries = Object.entries(extractRegion)
  const flooredExtractRegionEntries = extractRegionEntries.map(([key, value]) => {
    const v = Math.floor(value)

    return [key, v < 0 ? 0 : v]
  })

  return Object.fromEntries(flooredExtractRegionEntries)
}
