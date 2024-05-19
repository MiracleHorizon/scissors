import { useMemo } from 'react'
import Lightbox, {
  type LightboxExternalProps,
  type Plugin,
  type Slide
} from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

import { Cross1Icon } from '@scissors/react-icons/Cross1Icon'

import { type DownloadPayload, useOutputStore } from '@stores/output'

function getLightboxProps({
  file,
  downloadPayload
}: {
  file: File
  downloadPayload: Omit<DownloadPayload, 'file'> | null
}): LightboxExternalProps {
  const plugins: Plugin[] = [Zoom, Fullscreen]
  const slides: Slide[] = []

  if (downloadPayload) {
    const { link: url, fileName: filename } = downloadPayload

    plugins.push(Download)
    slides.push({
      src: url,
      alt: file.name,
      download: {
        url,
        filename
      }
    })
  } else {
    slides.push({
      src: URL.createObjectURL(file),
      alt: file.name
    })
  }

  const emptyComponent = () => null

  return {
    carousel: {
      finite: true
    },
    render: {
      buttonPrev: emptyComponent,
      buttonNext: emptyComponent,
      iconClose: () => <Cross1Icon width='22px' height='22px' label='close lightbox' />
    },
    controller: {
      closeOnBackdropClick: true,
      closeOnPullDown: true
    },
    plugins,
    slides
  }
}

export function UploadedFileLightbox({ file, isOpen, onClose }: Props) {
  const downloadPayload = useOutputStore(state => state.downloadPayload)
  const lightboxProps = useMemo(
    () =>
      getLightboxProps({
        file,
        downloadPayload
      }),
    [file, downloadPayload]
  )

  return <Lightbox open={isOpen} close={onClose} {...lightboxProps} />
}

interface Props {
  file: File
  isOpen: boolean
  onClose: VoidFunction
}
