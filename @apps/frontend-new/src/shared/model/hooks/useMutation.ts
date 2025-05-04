import { useState } from 'react'

export const useMutation = <Data = unknown, Payload = unknown>({
  fetcher,
  onSuccess,
  onError
}: {
  /* eslint no-unused-vars: 0 */
  fetcher: (payload: Payload) => Promise<Data>
  onSuccess?: (response: Data) => void
  onError?: (error: unknown) => void
}) => {
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)
  const [prevPayload, setPrevPayload] = useState<Payload | null>(null)

  const mutate = async (payload: Payload) => {
    // TODO: Зачем?
    if (error) {
      setError(null)
    }

    try {
      setLoading(true)

      const response = await fetcher(payload)
      setData(response)
      onSuccess?.(response)
      setPrevPayload(payload)
    } catch (err) {
      setError(err)
      onError?.(err)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => setError(null)
  const refetch = () => {
    if (!prevPayload) return

    mutate(prevPayload)
  }

  return {
    data,
    error,
    loading,
    mutate,
    reset,
    refetch
  }
}
