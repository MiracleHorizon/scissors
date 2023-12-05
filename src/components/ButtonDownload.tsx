import { useRef } from 'react'
import { Button, Link } from '@radix-ui/themes'
import { DownloadIcon } from '@radix-ui/react-icons'

import { useConvertStore } from '@stores/convert'

export function ButtonDownload() {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const downloadPayload = useConvertStore(state => state.downloadPayload)

  const handleButtonClick = () => {
    if (!linkRef.current) return

    linkRef.current.click()
  }

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
