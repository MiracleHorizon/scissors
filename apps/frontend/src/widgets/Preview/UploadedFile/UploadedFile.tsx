import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './UploadedFileCard'
import { UploadedFilePreview } from './UploadedFilePreview'
import { UploadedFileLightbox } from './UploadedFileLightbox'

export const UploadedFile = ({ file }: Props) => {
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
