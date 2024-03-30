'use client'

import { Flex } from '@radix-ui/themes'

import { ImageDropzone } from '@components/ImageDropzone'
import { ImageUploadPopover } from '@components/ImageUploadPopover'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useOutputStore } from '@stores/output'
import { allowedImageFormats } from '@site/config'
import { TOUR_STEP } from '@lib/tour'

export function ImageUploader() {
  const setFile = useOutputStore(state => state.setFile)

  return (
    <Flex
      gap='2'
      flexShrink='0'
      height='130px'
      width='100%'
      maxWidth={{
        initial: '100%',
        xs: '80dvw',
        sm: '470px'
      }}
      m='auto'
      data-tourstep={TOUR_STEP.FILE_UPLOAD}
    >
      <ImageDropzone accept={allowedImageFormats} setFile={setFile} />

      <Flex direction='column' gap='1'>
        <ButtonUpload
          accept={allowedImageFormats}
          setFile={setFile}
          tooltipContent='Upload an image from device'
        />
        <ImageUploadPopover />
      </Flex>
    </Flex>
  )
}
