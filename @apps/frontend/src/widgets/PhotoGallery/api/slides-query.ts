import { useQuery } from '@tanstack/react-query'

import type { ConvertSettings } from '@scissors/sharp'
import { S3_SERVER_API } from '@/shared/config'

export const useSlidesQuery = () =>
  useQuery<
    {
      label: string
      beforeSrc: string
      afterSrc: string
      details: {
        label: string
        value: unknown
      }[]
      settings: Partial<ConvertSettings>
    }[]
  >({
    queryKey: ['slides'],
    queryFn: async () => {
      const url = `${S3_SERVER_API}/api/v1/photos/compare-slides`
      const response = await fetch(url)
      const data = await response.json()

      return data
    }
  })
