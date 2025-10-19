import { Button } from '@radix-ui/themes'
import { useRef } from 'react'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

import { useImageStore } from '@/shared/image'

export const DownloadButton = () => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const downloadableFile = useImageStore(state => state.downloadableFile)

  const handleDownloadFile = () => {
    if (!linkRef.current) return

    linkRef.current.click()
  }

  return (
    <>
      <Button
        color='gray'
        radius='large'
        variant='surface'
        disabled={!downloadableFile}
        onClick={handleDownloadFile}
      >
        <DownloadIcon width='18px' height='18px' />
        Download
      </Button>

      {downloadableFile && (
        <a
          ref={linkRef}
          href={downloadableFile.link}
          download={downloadableFile.name}
          className='hidden'
        />
      )}
    </>
  )
}
