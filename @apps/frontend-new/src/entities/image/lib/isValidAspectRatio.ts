import type { AspectRatio } from '@/entities/image'

const ULTRAWIDE_MONITOR_WIDTH_RATIO = 21

export const isValidAspectRatio = ({
  aspectRatio,
  width,
  height
}: {
  aspectRatio: AspectRatio
  width: number
  height: number
}): boolean => {
  const [widthRatio, heightRatio] = aspectRatio

  return (
    widthRatio <= ULTRAWIDE_MONITOR_WIDTH_RATIO && width !== widthRatio && height !== heightRatio
  )
}
