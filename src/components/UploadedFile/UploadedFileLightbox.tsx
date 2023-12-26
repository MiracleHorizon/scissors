'use client'

import { useMemo } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import Lightbox, { type Slide } from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

import type { DownloadPayload } from '@app-types/DownloadPayload'

function getLightboxProps({ downloadPayload, file }: Pick<Props, 'downloadPayload' | 'file'>) {
  const plugins = [Zoom, Fullscreen]
  const slides: Slide[] = []

  if (downloadPayload) {
    plugins.push(Download)
    slides.push({
      src: downloadPayload.link,
      alt: file.name,
      download: {
        url: downloadPayload.link,
        filename: downloadPayload.fileName
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
      iconClose: () => <Cross1Icon width='22px' height='22px' />
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
