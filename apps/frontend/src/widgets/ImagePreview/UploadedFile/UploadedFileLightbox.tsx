import { useMemo } from 'react'
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

import { useOutputStore } from '@stores/output'
import type { DownloadableFile } from '@app-types/DownloadableFile'

interface Props {
  file: File
  isOpen: boolean
  onClose: VoidFunction
}

export const UploadedFileLightbox = ({ file, isOpen, onClose }: Props) => {
  const downloadableFile = useOutputStore(state => state.downloadableFile)
  const lightboxProps = useMemo(
    () =>
      getLightboxProps({
        file,
        downloadablePayloadWithoutFile: downloadableFile
      }),
    [file, downloadableFile]
  )

  return <Lightbox open={isOpen} close={onClose} {...lightboxProps} />
}

const getLightboxProps = ({
  file,
  downloadablePayloadWithoutFile
}: {
  file: File
  downloadablePayloadWithoutFile: Omit<DownloadableFile, 'file'> | null
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
