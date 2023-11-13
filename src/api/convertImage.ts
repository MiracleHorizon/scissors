import axios from 'axios'

interface Payload {
  url: string
  formData: FormData
}

// TODO: Add error handling
export async function convertImage({ url, formData }: Payload): Promise<Blob> {
  const { data } = await axios.post<Blob>(url, formData, {
    responseType: 'blob'
  })

  return data
}
