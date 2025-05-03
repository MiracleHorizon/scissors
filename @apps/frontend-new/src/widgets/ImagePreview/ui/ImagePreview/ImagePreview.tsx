import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { ImageProperties } from '@/entities/image'
import { ImageLightbox, UploadedImage } from '@/features/image/preview'

/* eslint no-unused-vars: 0 */
export const ImagePreview = ({
  fileForPreview,
  downloadableFile,
  setFile,
  removeFile
}: {
  fileForPreview: File
  downloadableFile: DownloadableFile | null
  setFile: (file: File | null) => void
  removeFile: () => void
}) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const openLightbox = () => setShowLightbox(true)
  const closeLightbox = () => setShowLightbox(false)

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      <ImageLightbox
        file={fileForPreview}
        open={showLightbox}
        onClose={closeLightbox}
        downloadableFile={downloadableFile}
      />

      <UploadedImage
        file={fileForPreview}
        downloadableFile={downloadableFile}
        onClick={openLightbox}
      />

      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: 1
        }}
      >
        {/* TODO: Loading */}
        <ImageProperties
          file={fileForPreview}
          setFile={setFile}
          removeFile={removeFile}
          loading={false}
        />
      </div>
    </Flex>
  )
}
