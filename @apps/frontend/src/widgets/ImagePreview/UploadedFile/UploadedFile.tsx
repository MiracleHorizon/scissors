import { useEffect, useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './UploadedFileCard'
import { UploadedFilePreview } from './UploadedFilePreview'
import { UploadedFileLightbox } from './UploadedFileLightbox'
import { useImageStore } from '@stores/image'
import { createImageFromFile } from '@helpers/image/createImageFromFile'

interface Props {
  file: File
}

export const UploadedFile = ({ file }: Props) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => setIsLightboxOpen(false)

  const setImage = useImageStore(state => state.setImage)

  useEffect(() => {
    createImageFromFile(file).then(setImage).catch(setImage)
  }, [file, setImage])

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      <UploadedFileCard file={file} />
      <UploadedFileLightbox file={file} isOpen={isLightboxOpen} onClose={closeLightbox} />
      <UploadedFilePreview file={file} onClick={openLightbox} />
    </Flex>
  )
}
