import { Box } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { CSSProperties } from 'react'

import { EnterFullScreenIcon } from '@scissors/react-icons/EnterFullScreenIcon'

import { DrawBoard } from '@widgets/DrawBoard'
import { pathForAssets } from '@site/config'
import { useOutputStore } from '@stores/output'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import styles from './UploadedFilePreview.module.css'

const rootStyle: CSSProperties = {
  backgroundImage: `url(${pathForAssets('image-fill-tiles.png')})`
} as const

interface Props {
  file: File
  onClick: VoidFunction
}

export const UploadedFilePreview = ({ file, onClick }: Props) => {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const downloadableFile = useOutputStore(state => state.downloadableFile)

  return (
    <Box width='100%' style={rootStyle} className={styles.root}>
      <EnterFullScreenIcon className={clsx(styles.icon, styles.fullscreenIcon)} />
      {selectedTab === TOOLBAR_TAB.DRAW && <DrawBoard />}

      <img
        src={downloadableFile?.link ?? URL.createObjectURL(file)}
        alt={file.name}
        className={styles.image}
        onClick={onClick}
      />
    </Box>
  )
}
