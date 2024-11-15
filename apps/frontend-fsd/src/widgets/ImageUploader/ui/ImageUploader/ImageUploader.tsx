import { useEffect } from 'react'
import { Flex } from '@radix-ui/themes'
import 'driver.js/dist/driver.css'

import { ImageDropzone } from '@/features/image'
import { ImageUploadPopover } from '@components/ImageUploadPopover'
import { UploadButton } from '@/features/upload'
import { useOutputStore } from '@/entities/image'
import { allowedImageFormats } from '@/shared/lib'
import { createTour, isTourCompleted, TOUR_STEP } from '@/entities/tour'
import styles from './ImageUploader.module.css'
import '@/entities/tour/tour.css'

export const ImageUploader = () => {
  const setFile = useOutputStore(state => state.setFile)

  useEffect(() => {
    if (isTourCompleted()) return

    /*
     * Start user tour.
     */
    createTour().then(driver => {
      driver.drive()
    })
  }, [])

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
      className={styles.root}
    >
      <ImageDropzone accept={allowedImageFormats} setFile={setFile} />

      <Flex direction='column' gap='1'>
        <UploadButton
          accept={allowedImageFormats}
          setFile={setFile}
          tooltipContent='Upload an image from device'
        />

        <ImageUploadPopover />
      </Flex>
    </Flex>
  )
}
