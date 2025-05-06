import type { AspectRatio } from '@/entities/image'

const simplifyAspectRatio = ({ width, height }: { width: number; height: number }): AspectRatio => {
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
const withCache = (cb: ({ width, height }: { width: number; height: number }) => AspectRatio) => {
  const cache = new Map()

  return ({ width, height }: { width: number; height: number }): AspectRatio => {
    const key = `${width}:${height}`
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = cb({ width, height })
    cache.set(key, result)

    return result
  }
}

const simplifyWithCache = withCache(simplifyAspectRatio)

export { simplifyWithCache as simplifyAspectRatio }
export { simplifyAspectRatio as simplifyAspectRatioPure }
