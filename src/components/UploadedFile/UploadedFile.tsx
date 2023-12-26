'use client'

import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './UploadedFileCard'
import { UploadedFilePreview } from './UploadedFilePreview'
import { UploadedFileLightbox } from './UploadedFileLightbox'
import { useOutputStore } from '@stores/output'

export function UploadedFile(props: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const downloadPayload = useOutputStore(state => state.downloadPayload)

  const handleOpenLightbox = () => setLightboxOpen(true)
  const handleCloseLightbox = () => setLightboxOpen(false)

  return (
    <Flex direction='column' align='center' gap='3'>
      <UploadedFileCard {...props} />
      <UploadedFileLightbox
        file={props.file}
        downloadPayload={downloadPayload}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
      />
      <UploadedFilePreview
        file={props.file}
        downloadPayload={downloadPayload}
        handleOpenLightbox={handleOpenLightbox}
      />
    </Flex>
  )
}

interface Props {
  file: File
  isLoading: boolean
}
