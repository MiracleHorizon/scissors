import { useMemo } from 'react'
import Lightbox, {
  type LightboxExternalProps,
  type Plugin,
  type Slide
} from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

import { Cross1Icon } from '@ui/icons/Cross1Icon'
import type { DownloadPayload } from '@app-types/DownloadPayload'

// TODO: Documentation
function getLightboxProps({
  downloadPayload,
  file
}: Pick<Props, 'downloadPayload' | 'file'>): LightboxExternalProps {
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

export function UploadedFileLightbox({ isOpen, onClose, ...props }: Props) {
  const lightboxProps = useMemo(() => getLightboxProps(props), [props])

  return <Lightbox open={isOpen} close={onClose} {...lightboxProps} />
}

interface Props {
  file: File
  downloadPayload: DownloadPayload | null
  isOpen: boolean
  onClose: VoidFunction
}
