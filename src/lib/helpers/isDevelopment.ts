/**
 * @returns true if the app is running in development mode
 */
export const isDevelopment = (): boolean => process.env.NODE_ENV === 'development'
