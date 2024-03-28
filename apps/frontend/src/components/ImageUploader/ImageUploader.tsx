'use client'

import { Flex } from '@radix-ui/themes'
import type { HTMLAttributes } from 'react'

import { ImageDropzone } from '@components/ImageDropzone'
import { ImageUploadPopover } from '@components/ImageUploadPopover'
import { ImageCameraUpload } from '@components/ImageCameraUpload'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useOutputStore } from '@stores/output'
import { allowedImageFormats } from '@site/config'
import { TOUR_STEP } from '@lib/tour'
import styles from './ImageUploader.module.css'

const fileUploadZoneHTMLAttributes = {
  className: styles.dropzone,
  'data-tourstep': TOUR_STEP.FILE_UPLOAD
} as const as HTMLAttributes<HTMLDivElement>

export function ImageUploader() {
  const setFile = useOutputStore(state => state.setFile)

  return (
    <Flex
      direction={{
        initial: 'column',
        xs: 'row'
      }}
      gap='2'
      width='100%'
      m='auto'
      className={styles.root}
    >
      <ImageDropzone
        accept={allowedImageFormats}
        setFile={setFile}
        htmlAttributes={fileUploadZoneHTMLAttributes}
      />

      <Flex
        direction={{
          initial: 'row-reverse',
          xs: 'column'
        }}
        justify='start'
        gap='var(--buttons-gap)'
      >
        <ButtonUpload
          accept={allowedImageFormats}
          setFile={setFile}
          tooltipContent='Upload an image from device'
        />
        <ImageUploadPopover />
        <ImageCameraUpload />
      </Flex>
    </Flex>
  )
}
