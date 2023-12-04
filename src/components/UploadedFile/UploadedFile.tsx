'use client'

import { AspectRatio, Box, Flex } from '@radix-ui/themes'

import { UploadedFileCard } from './UploadedFileCard'
import { useConvertStore } from '@stores/convert'
import styles from './UploadedFile.module.css'

export function UploadedFile(props: Props) {
  const downloadPayload = useConvertStore(state => state.downloadPayload)

  return (
    <Flex direction='column' align='center' gap='3'>
      <UploadedFileCard {...props} />
      <Box className={styles.aspectRadioBox}>
        <AspectRatio ratio={16 / 9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={downloadPayload ? downloadPayload.link : URL.createObjectURL(props.file)}
            alt={props.file.name}
            width='100%'
            height='100%'
          />
        </AspectRatio>
      </Box>
    </Flex>
  )
}

interface Props {
  file: File
  isLoading: boolean
}
