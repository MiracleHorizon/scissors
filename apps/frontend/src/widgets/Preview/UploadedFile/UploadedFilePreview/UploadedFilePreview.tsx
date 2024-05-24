import { Box } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { CSSProperties, FC } from 'react'

import { EnterFullScreenIcon } from '@scissors/react-icons/EnterFullScreenIcon'

import { pathForAssets } from '@site/config'
import { useOutputStore } from '@stores/output'
import styles from './UploadedFilePreview.module.css'

const rootStyle: CSSProperties = {
  backgroundImage: `url(${pathForAssets('image-fill-tiles.png')})`
} as const

interface Props {
  file: File
  handleOpenLightbox: VoidFunction
}

export const UploadedFilePreview: FC<Props> = ({ file, handleOpenLightbox }) => {
  const downloadPayload = useOutputStore(state => state.downloadPayload)

  return (
    <Box width='100%' style={rootStyle} className={styles.root}>
      <EnterFullScreenIcon className={clsx(styles.icon, styles.fullscreenIcon)} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={downloadPayload?.link ?? URL.createObjectURL(file)}
        alt={file.name}
        className={styles.image}
        onClick={handleOpenLightbox}
      />
    </Box>
  )
}
