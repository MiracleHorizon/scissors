import { useMemo, useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { ImageProperties } from '@/entities/image'
import { ImageLightbox, UploadedImage } from '@/features/image/preview'

/* eslint no-unused-vars: 0 */
export const ImagePreview = ({
  file,
  setFile
}: {
  file: File
  setFile: (file: File | null) => void
}) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const openLightbox = () => setShowLightbox(true)
  const closeLightbox = () => setShowLightbox(false)

  // TODO: Наверное, лучше в сторе держать?
  const downloadableFile = useMemo(
    () => ({ file, name: file.name, link: URL.createObjectURL(file) }),
    [file]
  )

  return (
    <Flex direction='column' align='center' width='100%' height='100%' gap='3'>
      {downloadableFile && (
        <ImageLightbox
          file={file}
          open={showLightbox}
          onClose={closeLightbox}
          downloadableFile={downloadableFile}
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
        {/* TODO: Loading */}
        <ImageProperties file={file} setFile={setFile} loading={false} />
      </div>
    </Flex>
  )
}
