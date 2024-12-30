import type { ImageAspectRatio, ImageHeight, ImageWidth } from '@app-types/image'

const calcAspectRatio = (width: ImageWidth, height: ImageHeight): ImageAspectRatio => {
  const gcd = (a: number, b: number): number => {
    if (!b) {
      return a
    }

    return gcd(b, a % b)
  }

  const ratio = gcd(width, height)
  if (ratio > 3) {
    return [width / ratio, height / ratio]
  }

  return [width, height]
}

// eslint-disable-next-line no-unused-vars
const withCache = (cb: (width: ImageWidth, height: ImageHeight) => ImageAspectRatio) => {
  const cache = new Map()

  return (width: number, height: number): [number, number] => {
    const key = `${width}:${height}`
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = cb(width, height)
    cache.set(key, result)

    return result
  }
}

const calcWithCache = withCache(calcAspectRatio)

export { calcWithCache as calcAspectRatio }
export { calcAspectRatio as calcAspectRatioPure }
