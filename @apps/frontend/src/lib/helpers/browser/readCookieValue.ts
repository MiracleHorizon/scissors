export const readCookieValue = (cookieKey: string): string | null => {
  const browserCookies = document.cookie

  for (const cookie of browserCookies.split(';')) {
    const [key, value] = cookie.split('=')

    if (key.trim() === cookieKey) {
      return value
    }
  }

  return null
}
