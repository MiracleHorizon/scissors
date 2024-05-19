import { bytesToMegabytes } from '@helpers/file/bytesToMegabytes'
import type { Dimension } from './types'

export function getAspectRatio(width: number, height: number): [number, number] {
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

export function isCorrectAspectRatio(
  [widthRatio, heightRatio]: [number, number],
  width: number,
  height: number
): boolean {
  const ULTRAWIDE_MONITOR_WIDTH_RATIO = 21

  return (
    width !== widthRatio && height !== heightRatio && widthRatio <= ULTRAWIDE_MONITOR_WIDTH_RATIO
  )
}

export function getFileSize(fileSize: number): string {
  const formatFileSize = (size: number) => size.toFixed(1).replace('.0', '')

  if (fileSize < 1000) {
    return `${fileSize} B`
  } else if (fileSize < 1000 * 1000) {
    return `${formatFileSize(fileSize / 1000)} KB`
  }

  return formatFileSize(bytesToMegabytes(fileSize)) + ' MB'
}

async function readImageFile(file: File): Promise<HTMLImageElement> {
  const fileReader = new FileReader()
  const fileReaderPromise = new Promise<HTMLImageElement>((resolve, reject) => {
    fileReader.onload = (ev: ProgressEvent<FileReader>) => {
      const img = new Image()

      img.onload = () => {
        resolve(img)
      }

      img.onerror = () => {
        reject(new Error('Could not load image'))
      }

      if (!ev.target) return
      img.src = ev.target.result as string
    }

    fileReader.onerror = () => {
      reject(new Error('Could not read file'))
    }
  })

  fileReader.readAsDataURL(file)

  return fileReaderPromise
}

export async function getImageDimension(file: File): Promise<Dimension | null> {
  try {
    const { width, height } = await readImageFile(file)

    return {
      width,
      height
    }
  } catch {
    return null
  }
}
