import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './uploaded-file-card'
import { UploadedFilePreview } from './uploaded-file-preview'
import { UploadedFileLightbox } from './uploaded-file-lightbox'

export function UploadedFile({ file }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => setLightboxOpen(false)

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      <UploadedFileCard file={file} />
      <UploadedFileLightbox file={file} isOpen={lightboxOpen} onClose={closeLightbox} />
      <UploadedFilePreview file={file} handleOpenLightbox={openLightbox} />
    </Flex>
  )
}

interface Props {
  file: File
}
