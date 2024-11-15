import { useState } from 'react'

import { useRequestStore } from '../model/request.store'
import { useOutputStore } from '../model/output.store'
import type { MutationPayload } from './types'
import type { DownloadableFile } from '@/shared/lib/types'

type MutationCallback<T extends Record<string, any>> = (
  // eslint-disable-next-line no-unused-vars
  payload: MutationPayload<T>
) => Promise<DownloadableFile>

export const useImageMutation = <T extends Record<string, any>>(callback: MutationCallback<T>) => {
  const [error, setError] = useState<unknown>(null)

  const setLoading = useRequestStore(state => state.setLoading)
  const setDownloadableFile = useOutputStore(state => state.setDownloadableFile)

  const reset = () => setError(null)

  const mutate = async (payload: MutationPayload<T>) => {
    if (error) {
      setError(null)
    }

    try {
      setLoading(true)

      const file = await callback(payload)
      setDownloadableFile(file)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    mutate,
    error,
    reset
  }
}
