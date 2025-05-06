import { BYTES_IN_KB, KILOBYTES_IN_MB } from './constants'

/**
 * Converts bytes to megabytes
 * @param bytes - The number of bytes to convert
 * @returns The number of megabytes
 */
export const bytesToMegabytes = (bytes: number): number => bytes / BYTES_IN_KB / KILOBYTES_IN_MB
