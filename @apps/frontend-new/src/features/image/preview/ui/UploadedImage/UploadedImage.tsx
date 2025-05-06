import { Box } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { CSSProperties } from 'react'

import { EnterFullScreenIcon } from '@scissors/react-icons/EnterFullScreenIcon'

import { pathForAssets } from '@/shared/github'
import styles from './UploadedImage.module.css'

const rootStyle: CSSProperties = {
  backgroundImage: `url(${pathForAssets('image-fill-tiles.png')})`
} as const

export const UploadedImage = ({
  file,
  downloadableFile,
  onClick
}: {
  file: File
  downloadableFile: DownloadableFile | null
  onClick: VoidFunction
}) => (
  <Box width='100%' style={rootStyle} className={styles.root} onClick={onClick}>
    <EnterFullScreenIcon className={clsx(styles.icon, styles.fullscreenIcon)} />

    <img
      src={downloadableFile?.link ?? URL.createObjectURL(file)}
      alt={file.name}
      className={styles.image}
    />
  </Box>
)
