import { Flex } from '@radix-ui/themes'
import 'driver.js/dist/driver.css'

import { ALLOWED_IMAGE_FORMATS } from '@scissors/sharp'

import { TOUR_STEP, useStartTour } from '@/entities/tour'
import { ImageDropzone } from '@/features/image/upload'

export const ImageUploader = ({ setFile }: { setFile: (file: File | null) => void }) => {
  useStartTour()

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
      <ImageDropzone accept={ALLOWED_IMAGE_FORMATS} setFile={setFile} />
    </Flex>
  )
}
