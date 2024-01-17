import sharp, { type Stats } from 'sharp'

export async function getStatsOrNull(imageSharp: sharp.Sharp): Promise<Stats | null> {
  try {
    return await imageSharp.stats()
  } catch {
    return null
  }
}
