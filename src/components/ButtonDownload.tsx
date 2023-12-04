import { useCallback } from 'react'
import { Button, Link } from '@radix-ui/themes'
import { DownloadIcon } from '@radix-ui/react-icons'

import { useConvertStore } from '@stores/convert'

export function ButtonDownload() {
  const downloadPayload = useConvertStore(state => state.downloadPayload)
  const removeDownloadPayload = useConvertStore(state => state.removeDownloadPayload)

  const handleRemoveDownloadPayload = useCallback(
    () => removeDownloadPayload(),
    [removeDownloadPayload]
  )

  return (
    <Link href={downloadPayload?.link} download={downloadPayload?.fileName}>
      <Button
        size='3'
        variant='surface'
        disabled={!downloadPayload}
        onClick={handleRemoveDownloadPayload}
      >
        <DownloadIcon width='20px' height='20px' />
        Download
      </Button>
    </Link>
  )
}
