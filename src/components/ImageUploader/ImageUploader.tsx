'use client'

import { Flex } from '@radix-ui/themes'
import type { HTMLAttributes } from 'react'

import { ImageDropzone } from '@components/ImageDropzone'
import { ImageUploadPopover } from '@components/ImageUploadPopover'
import { ImageCameraDialog } from 'src/components/ImageCameraDialog'
import { ButtonImport } from '@ui/ButtonImport'
import { useOutputStore } from '@stores/output'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import { TOUR_STEP } from '@lib/tour'
import styles from './ImageUploader.module.css'

const fileUploadZoneHTMLAttributes = {
  className: styles.dropzone,
  'data-tourstep': TOUR_STEP.FILE_UPLOAD
} as HTMLAttributes<HTMLDivElement>

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
        accept={ALLOWED_IMAGE_FORMATS}
        setFile={setFile}
        htmlAttributes={fileUploadZoneHTMLAttributes}
      />

      <Flex
        direction={{
          initial: 'row-reverse',
          xs: 'column'
        }}
        justify='start'
        className={styles.buttons}
      >
        <ButtonImport
          accept={ALLOWED_IMAGE_FORMATS}
          setFile={setFile}
          tooltipContent='Upload an image from device'
        />
        <ImageUploadPopover />
        <ImageCameraDialog />
      </Flex>
    </Flex>
  )
}
