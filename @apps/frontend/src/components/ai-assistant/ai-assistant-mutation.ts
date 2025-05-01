import { useState } from 'react'

const AI_ASSISTANT_API = 'http://localhost:4201/api'

export const useAiAssistantMutation = <T>() => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setData(null)
    setError(null)
  }

  const mutate = async (prompt: string) => {
    console.log(321)

    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${AI_ASSISTANT_API}/ai/completion`, {
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
    } catch (error) {
      setError(error)
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
