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
  open,
  file,
  downloadableFile,
  onClose
}: {
  open: boolean
  file: File
  downloadableFile: DownloadableFile | null
  onClose: VoidFunction
}) => (
  <Lightbox
    open={open}
    close={onClose}
    {...getLightboxProps({
      file,
      downloadableFile
    })}
  />
)

const getLightboxProps = ({
  file,
  downloadableFile
}: {
  file: File
  downloadableFile: DownloadableFile | null
}): LightboxExternalProps => {
  const plugins: Plugin[] = [Zoom, Fullscreen]
  const slides: Slide[] = []

  if (downloadableFile) {
    const { link: url, name: filename } = downloadableFile

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

  return {
    carousel: {
      finite: true
    },
    render: {
      buttonPrev: () => null,
      buttonNext: () => null,
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
