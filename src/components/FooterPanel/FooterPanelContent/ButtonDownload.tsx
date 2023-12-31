import { useRef } from 'react'
import { Button, Link, Text } from '@radix-ui/themes'

import { DownloadIcon } from '@ui/icons/DownloadIcon'
import { useOutputStore } from '@stores/output'

export function ButtonDownload() {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const downloadPayload = useOutputStore(state => state.downloadPayload)

  const handleButtonClick = () => {
    if (!linkRef.current) return

    linkRef.current.click()
  }

  return (
    <>
      <Button size='3' variant='surface' disabled={!downloadPayload} onClick={handleButtonClick}>
        <DownloadIcon width='20px' height='20px' />
        <Text as='span'>Download</Text>
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
