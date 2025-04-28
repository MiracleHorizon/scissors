import Lightbox, {
  type LightboxExternalProps,
  type Plugin,
  type Slide
} from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'yet-another-react-lightbox/styles.css'

import { Cross1Icon } from '@scissors/react-icons/Cross1Icon'

export const ImageLightbox = ({
  file,
  downloadableFile,
  isOpen,
  onClose
}: {
  file: File
  downloadableFile: {
    file: File
    fileName: string
    link: string
  }
  isOpen: boolean
  onClose: VoidFunction
}) => {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      {...getLightboxProps({
        file,
        downloadablePayloadWithoutFile: downloadableFile
      })}
    />
  )
}

const getLightboxProps = ({
  file,
  downloadablePayloadWithoutFile
}: {
  file: File
  downloadablePayloadWithoutFile: {
    fileName: string
    link: string
  } | null
}): LightboxExternalProps => {
  const plugins: Plugin[] = [Zoom, Fullscreen]
  const slides: Slide[] = []

  if (downloadablePayloadWithoutFile) {
    const { link: url, fileName: filename } = downloadablePayloadWithoutFile

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
