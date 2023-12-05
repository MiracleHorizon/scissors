'use client'

import { useState } from 'react'
import { AspectRatio, Box, Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './UploadedFileCard'
import { UploadedFileLightbox } from './UploadedFileLightbox'
import { useConvertStore } from '@stores/convert'
import styles from './UploadedFile.module.css'

export function UploadedFile(props: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const downloadPayload = useConvertStore(state => state.downloadPayload)

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
      <Box className={styles.aspectRadioBox} onClick={handleOpenLightbox}>
        <AspectRatio ratio={16 / 9}>
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={downloadPayload?.link ?? URL.createObjectURL(props.file)}
            alt={props.file.name}
            width='100%'
            height='100%'
          />
        </AspectRatio>
      </Box>
    </Flex>
  )
}

interface Props {
  file: File
  isLoading: boolean
}
