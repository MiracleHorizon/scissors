import { useEffect, useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { ImageProperties } from '@/entities/image'
import { ImageLightbox, UploadedImage } from '@/features/image/preview'
import { createImageFromFile } from '@/shared/image'

export const ImagePreview = ({
  file,
  setImage
}: {
  file: File
  setImage: (image: HTMLImageElement) => void
}) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const openLightbox = () => setShowLightbox(true)
  const closeLightbox = () => setShowLightbox(false)

  // TODO: Чё это такое?
  useEffect(() => {
    createImageFromFile(file).then(setImage).catch(setImage)
  }, [file, setImage])

  // TODO: Прокинуть
  const downloadableFile = {
    file,
    fileName: file.name,
    link: URL.createObjectURL(file)
  }

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      {downloadableFile && (
        <ImageLightbox
          file={file}
          downloadableFile={downloadableFile}
          isOpen={showLightbox}
          onClose={closeLightbox}
        />
      )}

      <UploadedImage file={file} downloadableFile={downloadableFile} onClick={openLightbox} />

      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: 1
        }}
      >
        {/* TODO: Пропсы */}
        <ImageProperties file={file} setFile={() => {}} removeFile={() => {}} loading={false} />
      </div>
    </Flex>
  )
}
