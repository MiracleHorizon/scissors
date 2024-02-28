import { BYTES_IN_KB, KILOBYTES_IN_MB } from './constants'

export const bytesToMegabytes = (bytes: number): number => bytes / BYTES_IN_KB / KILOBYTES_IN_MB
