const VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB = 4.5 // decimal variant
export const MAX_FILE_SIZE_MB = VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB

export const BYTES_IN_KB = 1000
export const KILOBYTES_IN_MB = 1000
export const BYTES_IN_MB = KILOBYTES_IN_MB * BYTES_IN_KB
export const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * BYTES_IN_MB

export const MIN_FILE_NAME_LENGTH = 1
export const MAX_FILE_NAME_LENGTH = 255
export const NOT_ALLOWED_CHARS = ['/', '\\', '<', '>', ':', '|', '"', '?', '*'] as const
