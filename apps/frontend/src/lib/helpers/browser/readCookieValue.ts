export const readCookieValue = (cookieKey: string): string | null => {
  if (typeof document === 'undefined') {
    return null
  }

  const browserCookies = document.cookie

  for (const cookie of browserCookies.split(';')) {
    const [key, value] = cookie.split('=')

    if (key.trim() === cookieKey) {
      return value
    }
  }

  return null
}
