export function isMediaDevicesSupported(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  const isMediaDevicesApiSupported = 'mediaDevices' in navigator
  const isGetUserMediaSupported = 'getUserMedia' in navigator.mediaDevices

  return isMediaDevicesApiSupported && isGetUserMediaSupported
}
