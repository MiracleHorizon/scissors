import axios from 'axios'

interface Payload {
  url: string
  formData: FormData
}

const ABORT_TIMEOUT = 15_000

export async function convertImage({ url, formData }: Payload): Promise<Blob> {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort()
  }, ABORT_TIMEOUT)

  const { data } = await axios.post<Blob>(url, formData, {
    responseType: 'blob',
    signal: abortController.signal
  })

  return data
}
