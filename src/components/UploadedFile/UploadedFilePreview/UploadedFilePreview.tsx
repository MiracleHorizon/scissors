'use client'

import { AspectRatio, Box } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { EnterFullScreenIcon } from '@ui/icons/EnterFullScreenIcon'
import type { DownloadPayload } from '@app-types/DownloadPayload'
import styles from './UploadedFilePreview.module.css'

export const UploadedFilePreview: FC<Props> = ({ file, downloadPayload, handleOpenLightbox }) => (
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

interface Props {
  file: File
  downloadPayload: DownloadPayload | null
  handleOpenLightbox: VoidFunction
}
