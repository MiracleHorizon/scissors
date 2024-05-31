import { useRef } from 'react'
import { Button, Link as RadixLink } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'

export const ButtonDownload = () => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const downloadPayload = useOutputStore(state => state.downloadPayload)
  const disabled = !downloadPayload

  const handleButtonClick = () => {
    if (!linkRef.current) return

    linkRef.current.click()
  }

  return (
    <>
      <Button
        data-tourstep={TOUR_STEP.DOWNLOAD_BUTTON}
        data-cy='button-download'
        size='3'
        variant={disabled ? 'solid' : 'surface'}
        radius='large'
        disabled={disabled}
        onClick={handleButtonClick}
      >
        <DownloadIcon width='20px' height='20px' />

        <MediaQuery minWidth={401}>Download</MediaQuery>
      </Button>

      {downloadPayload && (
        <RadixLink
          ref={linkRef}
          href={downloadPayload.link}
          download={downloadPayload.fileName}
          className='hidden'
        />
      )}
    </>
  )
}
