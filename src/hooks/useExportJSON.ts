import { useCallback } from 'react'

import { createJSONBlob, downloadFile } from '@utils/export'

export function useExportJSON() {
  const handleExportJSON = useCallback(
    ({ payload, fileName }: { payload: Record<string, any>; fileName: string }) => {
      const blob = createJSONBlob(payload)

      downloadFile({
        blob,
        download: `${fileName}.json`
      })
    },
    []
  )

  return { handleExportJSON }
}
