import { useMutation } from '@tanstack/react-query'

import type { ConvertSettings } from '@scissors/sharp'

import { AI_SERVER_API } from '@/shared/config'

export const useAskAiMutation = ({
  onSuccess,
  onError
}: {
  /* eslint no-unused-vars: 0 */
  onSuccess?: (data: Partial<ConvertSettings>) => void
  onError?: (error: unknown) => void
} = {}) =>
  useMutation({
    mutationKey: ['ai-assistant'],
    mutationFn: async (prompt: string): Promise<Partial<ConvertSettings>> => {
      const response = await fetch(`${AI_SERVER_API}/v1/completion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt
        })
      })

      if (!response.ok) {
        const err = await response.json()
        return Promise.reject(err)
      }

      return response.json()
    },
    onSuccess,
    onError
  })
