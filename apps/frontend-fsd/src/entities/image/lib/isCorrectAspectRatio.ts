import type { ImageAspectRatio, ImageHeight, ImageWidth } from '../model/types'

const ULTRAWIDE_MONITOR_WIDTH_RATIO = 21

export const isCorrectAspectRatio = (
  [widthRatio, heightRatio]: ImageAspectRatio,
  width: ImageWidth,
  height: ImageHeight
): boolean =>
  widthRatio <= ULTRAWIDE_MONITOR_WIDTH_RATIO && width !== widthRatio && height !== heightRatio
