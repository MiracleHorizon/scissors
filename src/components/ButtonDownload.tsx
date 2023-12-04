import { useCallback, useRef } from 'react'
import { Button, Link } from '@radix-ui/themes'
import { DownloadIcon } from '@radix-ui/react-icons'

import { useConvertStore } from '@stores/convert'

export function ButtonDownload() {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const downloadPayload = useConvertStore(state => state.downloadPayload)
  const removeDownloadPayload = useConvertStore(state => state.removeDownloadPayload)

  const handleButtonClick = useCallback(() => {
    if (!linkRef.current) return

    linkRef.current.click()
    removeDownloadPayload()
  }, [removeDownloadPayload])

  return (
    <>
      <Button size='3' variant='surface' disabled={!downloadPayload} onClick={handleButtonClick}>
        <DownloadIcon width='20px' height='20px' />
        Download
      </Button>
      <Link
        ref={linkRef}
        href={downloadPayload?.link}
        download={downloadPayload?.fileName}
        className='hidden'
      />
    </>
  )
}
