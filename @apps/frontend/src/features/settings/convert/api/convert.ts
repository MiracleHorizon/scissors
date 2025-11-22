import { SERVER_API } from '@/shared/config'

export const convertImage = async (formData: FormData): Promise<Blob> => {
  try {
    const response = await fetch(`${SERVER_API}/api/v1/convert`, {
      body: formData,
      method: 'POST',
      signal: AbortSignal.timeout(15_000)
    })

    if (response.ok) {
      return response.blob()
    }

    return Promise.reject(response)
  } catch (err) {
    console.error(err)

    return Promise.reject(err)
  }
}
