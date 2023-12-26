'use client'

import { AspectRatio, Box } from '@radix-ui/themes'
import { EnterFullScreenIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import type { DownloadPayload } from '@app-types/DownloadPayload'
import styles from './UploadedFilePreview.module.css'

export function UploadedFilePreview({ file, downloadPayload, handleOpenLightbox }: Props) {
  return (
    <Box className={styles.root} onClick={handleOpenLightbox}>
      <AspectRatio ratio={16 / 9}>
        <EnterFullScreenIcon className={clsx(styles.icon, styles.fullscreenIcon)} />

        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={downloadPayload?.link ?? URL.createObjectURL(file)}
          alt={file.name}
          width='100%'
          height='100%'
        />
      </AspectRatio>
    </Box>
  )
}

interface Props {
  file: File
  downloadPayload: DownloadPayload | null
  handleOpenLightbox: VoidFunction
}
