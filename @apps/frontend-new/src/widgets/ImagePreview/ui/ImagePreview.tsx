import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { ImageLightbox, UploadedImage } from '@/features/image/preview'

// import { createImageFromFile } from '@helpers/image/createImageFromFile'

export const ImagePreview = ({
  file,
  setImage
}: {
  file: File
  setImage: (image: HTMLImageElement) => void
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => setIsLightboxOpen(false)

  // useEffect(() => {
  //   createImageFromFile(file).then(setImage).catch(setImage)
  // }, [file, setImage])

  const downloadableFile = {
    file,
    fileName: file.name,
    link: URL.createObjectURL(file)
  }

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      {/* <UploadedImageToolbar file={file} /> */}

      {downloadableFile && (
        <ImageLightbox
          file={file}
          downloadableFile={downloadableFile}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
        />
      )}
      <UploadedImage file={file} downloadableFile={downloadableFile} onClick={openLightbox} />
    </Flex>
  )
}
