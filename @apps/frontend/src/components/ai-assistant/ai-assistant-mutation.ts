import { useState } from 'react'

const AI_ASSISTANT_API = 'http://localhost:4201/api'

export const useAiAssistantMutation = <Data>() => {
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setData(null)
    setError(null)
  }

  const mutate = async (
    prompt: string,
    {
      onSuccess,
      onError
    }: {
      /* eslint no-unused-vars: 0 */
      onSuccess?: (data: Data) => void
      onError?: (error: unknown) => void
    } = {}
  ) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${AI_ASSISTANT_API}/v1/completion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt
        })
      })

      if (!response.ok) {
        setError(response.statusText)
        return
      }

      const data = await response.json()

      setData(data)
      onSuccess?.(data)
    } catch (error) {
      setError(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    error,
    loading,
    mutate,
    reset
  }
}
